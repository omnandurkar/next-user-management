'use client'

import React, { useContext, useState } from 'react'
import { Button } from '@/components/ui/button'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter

} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"
import { Input } from '../ui/input'
import { addNewUserFormControl, addNewUserInitialValues } from '@/utils'
import { addNewUserAction, editUserAction } from '@/actions/page'
import { UserContext } from '@/context'
import ShimmerButton from '../magicui/shimmer-button'


const AddUser = () => {
    const [loading, setLoading] = useState(false);
    const { AddUserOpen, setAddUserOpen, addNewUserFormData, setAddNewUserFormData, currentEditedID, setCurrentEditedID } = useContext(UserContext);

    const handleSaveButtonValid = () => {
        return Object.keys(addNewUserFormData).every((key) => addNewUserFormData[key].trim() !== '')
    }

    const handleAddNewUserAction = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true);
        try {
            const result = currentEditedID !== null
                ? await editUserAction(currentEditedID, addNewUserFormData, '/user-management')
                : await addNewUserAction(addNewUserFormData, "/user-management");



        } catch (error) {

            console.error('Error:', error);
        } finally {
            // Reset the form and loading state
            setAddUserOpen(false);
            setAddNewUserFormData(addNewUserInitialValues);
            setCurrentEditedID(null);
            setLoading(false);
        }
    }

    return (
        <div>
            <ShimmerButton onClick={() => setAddUserOpen(true)} className='active:scale-95'>
                Add User
            </ShimmerButton>

            <Dialog open={AddUserOpen} onOpenChange={() => {
                setAddUserOpen(false);
                setAddNewUserFormData(addNewUserInitialValues);
                setCurrentEditedID(null);
            }}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {currentEditedID !== null ? 'Edit User' : 'Add new user'}
                        </DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddNewUserAction} className="grid gap-4 py-4">
                        {addNewUserFormControl.map(controlItem => (
                            <div key={controlItem.name}>
                                <div className=''>
                                    <Label htmlFor={controlItem.name} className="text-right">
                                        {controlItem.label}
                                    </Label>
                                    <Input
                                        id={controlItem.name}
                                        name={controlItem.name}
                                        placeholder={controlItem.placeholder}
                                        type={controlItem.type}
                                        className="col-span-3 my-2"
                                        value={addNewUserFormData[controlItem.name]}
                                        onChange={(e) => setAddNewUserFormData({
                                            ...addNewUserFormData,
                                            [controlItem.name]: e.target.value
                                        })}
                                    />
                                </div>
                            </div>
                        ))}
                        <DialogFooter>
                            <Button className='disabled:opacity-55' disabled={!handleSaveButtonValid()} type="submit">
                                {loading ? 'Saving....' : 'Save Changes'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddUser


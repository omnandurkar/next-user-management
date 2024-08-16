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


const AddUser = () => {

    // const [AddUserOpen, setAddUserOpen] = useState(false);
    // const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserInitialValues); // this is in the context now

    const { AddUserOpen, setAddUserOpen, addNewUserFormData, setAddNewUserFormData, currentEditedID, setCurrentEditedID } = useContext(UserContext);

    // console.log(addNewUserFormControl);

    const handleSaveButtonValid = () => {
        return Object.keys(addNewUserFormData).every((key) => addNewUserFormData[key].trim() !== '')
    }

    const handleAddNewUserAction = async (e) => {
        const result = currentEditedID !== null ? await editUserAction(
            currentEditedID,
            addNewUserFormData,
            '/user-management'
        )
            :
            await addNewUserAction(
                addNewUserFormData,
                "/user-management"
            );
        // console.log(result);
        setAddUserOpen(false);
        setAddNewUserFormData(addNewUserInitialValues);

    }

    return (
        <div>

            {/* <h2>Add new user</h2> */}
            <Button onClick={() => setAddUserOpen(true)} className='active:scale-95'> Add User </Button>

            <Dialog open={AddUserOpen} onOpenChange={() => {
                setAddUserOpen(false); setAddNewUserFormData(addNewUserInitialValues); setCurrentEditedID(null)
            }}>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {
                                currentEditedID !== null ? 'Edit User' : 'Add new user'
                            }
                        </DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <form action={handleAddNewUserAction} className="grid gap-4 py-4">

                        {
                            addNewUserFormControl.map(controlItem => <div key={controlItem.name} >
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
                            )

                        }

                        <DialogFooter>
                            {/* <Button type="submit">{"Saving" : "Save" }</Button> */}
                            <Button className='disabled:opacity-55' disabled={!handleSaveButtonValid()} type="submit">Save</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>


            </Dialog>



        </div>
    )
}

export default AddUser
'use server';

import { connectDB } from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";


// add user action

export const addNewUserAction = async (formData, pathToRevalidate) => {

    await connectDB();

    try {

        const newlyCreatedUser = await User.create(formData);
        if (newlyCreatedUser) {
            // console.log('User created successfully');
            revalidatePath(pathToRevalidate);

            return ({
                status: 'success',
                message: 'User created successfully'
            })
        } else {
            console.log('User creation failed');
            return ({
                status: 'failed',
                message: 'User creation failed'
            })
        }

    } catch (error) {
        console.log(error);
    }

}


//fetch user action

export const fetchUserAction = async () => {

    await connectDB();

    try {

        const listUsers = await User.find({});
        if (listUsers) {
            // console.log('Users fetched successfully');
            return {
                status: true,
                // message: 'Users fetched successfully',
                data: JSON.parse(JSON.stringify(listUsers))
            }
        } else {
            console.log('Failed to fetch users');
            return {
                status: false,
                message: 'Failed to fetch users'
            }
        }

    } catch (error) {
        console.log(error);
        return {
            status: false,
            message: 'Failed to fetch users'
        }
    }

}


// delete user action

export const deleteUserAction = async (currentUserID, pathToRevalidate) => {

    await connectDB();

    try {

        const deleteUser = await User.findByIdAndDelete(currentUserID);
        if (deleteUser) {
            // console.log('User deleted successfully');
            revalidatePath(pathToRevalidate);
            return {
                status: true,
                message: 'User deleted successfully'
            }
        } else {
            console.log('Failed to delete user');
            return {
                status: false,
                message: 'Failed to delete user'
            }
        }

    } catch (error) {
        console.log(error);
    }

}


//edit user action

export const editUserAction = async (currentUserID, formData, pathToRevalidate, ) => {

    await connectDB();

    try {



        const { firstName, lastName, email, address } = formData;

        const updatedUser = await User.findOneAndUpdate({
            _id: currentUserID
        },
            { firstName, lastName, email, address },
            { new: true }
        );

        if (updatedUser) {
            // console.log('User updated successfully');
            revalidatePath(pathToRevalidate);
            return {
                status: true,
                message: 'User updated successfully'
            }
        } else {
            console.log('Failed to update user');
            return {
                status: false,
                message: 'Failed to update user'
            }
        }

    } catch (error) {
        console.log(error);
    }

}

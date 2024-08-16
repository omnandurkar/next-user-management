'use client';

import React, { useContext } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '../ui/button';
import { deleteUserAction } from '@/actions/page';
import { UserContext } from '@/context';

const SingleUser = ({ user }) => {

  const { setAddUserOpen, setAddNewUserFormData, setCurrentEditedID } = useContext(UserContext);

  const handleDeleteUser = async (getCurrentUserID) => {

    const result = await deleteUserAction(getCurrentUserID, "/user-management");
    console.log(result);
    alert(result.message);
  }

  const handleEditUser =(getCurrentUser) => {

    setAddUserOpen(true);
    setAddNewUserFormData({
      firstName : getCurrentUser?.firstName,
      lastName : getCurrentUser?.lastName,
      email : getCurrentUser?.email,
      address : getCurrentUser?.address

    })

    setCurrentEditedID(getCurrentUser?._id);

  }

  return (
    <Card className="shadow-lg rounded-lg p-6 max-w-sm flex flex-col justify-around  bg-gradient-to-br from-blue-200 via-white to-pink-200 hover:from-pink-200 hover:via-white hover:to-blue-200  hover:shadow-xl transition cursor-cell duration-300 border border-gray-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-800">{user.firstName} {user.lastName}</CardTitle>
        <CardDescription className="text-gray-600">{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mt-4">
          <span className="font-semibold text-gray-900">Address:</span> {user.address}
        </p>
      </CardContent>

      <CardDescription className="space-x-5 ps-6">

        <Button onClick={()=> handleEditUser(user)} >Edit</Button>
        <Button onClick={() => handleDeleteUser(user._id)} >Delete</Button>

      </CardDescription>
    </Card>
  )
}

export default SingleUser

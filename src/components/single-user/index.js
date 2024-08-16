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

  const handleEditUser = (getCurrentUser) => {

    setAddUserOpen(true);
    setAddNewUserFormData({
      firstName: getCurrentUser?.firstName,
      lastName: getCurrentUser?.lastName,
      email: getCurrentUser?.email,
      address: getCurrentUser?.address

    })

    setCurrentEditedID(getCurrentUser?._id);

  }

  return (
    <Card className="shadow-lg mb-5 rounded-lg p-6 max-w-sm flex flex-col justify-around  bg-gradient-to-br from-gray-400 via-gray-100 to-slate-300 hover:from-slate-300 hover:via-gray-100 hover:to-gray-400  hover:shadow-xl transition cursor-cell duration-300 border border-gray-200">
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

        <Button onClick={() => handleEditUser(user)} >Edit</Button>
        <Button onClick={() => handleDeleteUser(user._id)} >Delete</Button>

      </CardDescription>
    </Card>
  )
}

export default SingleUser

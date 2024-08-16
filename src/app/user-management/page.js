import { fetchUserAction } from '@/actions/page';
import SingleUser from '@/components/single-user';
import AddUser from '@/components/add-new-user'

import React from 'react'
import Link from 'next/link';

const UserManagement = async () => {

    const getListOfUsers = await fetchUserAction();


    return (
        <div className='p-10 bg-black text-white'>
            <div className='flex justify-between items-center p-2 '>
                <Link href='/'>
                    <h1 className='text-2xl md:text-5xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white via-gray-400 to-slate-800  bg-clip-text text-center  font-semibold leading-none text-transparent'>User Management</h1>
                </Link>
                <AddUser />

            </div>

            <div className='md:p-20 py-10'>

                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                    {
                        getListOfUsers && getListOfUsers.data && getListOfUsers.data.length > 0 ?
                            getListOfUsers.data.map((userItem) =>

                                <SingleUser user={userItem} />

                            ) : <p>No users found</p>
                    }
                </div>

            </div>

        </div>
    )
}

export default UserManagement
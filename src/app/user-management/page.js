import { fetchUserAction } from '@/actions/page';
import SingleUser from '@/components/single-user';
import AddUser from '@/components/add-new-user'

import React from 'react'

const UserManagement = async () => {

    const getListOfUsers = await fetchUserAction();

    // console.log(getListOfUsers);

    return (
        <div className='p-10'>
            <div className='flex justify-between'>

                <h1 className='text-2xl'>User Management</h1>
                <AddUser />
            </div>

            <div className='py-10'>

                <div className='grid grid-col-1 md:grid-cols-3 gap-2' >
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
'use client';

import { addNewUserInitialValues } from '@/utils';
import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export default function UserState({ children }) {

    const [AddUserOpen, setAddUserOpen] = useState(false);
    const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserInitialValues);

    const [currentEditedID, setCurrentEditedID] = useState(null);

    return (
        <UserContext.Provider value={{ currentEditedID, setCurrentEditedID, AddUserOpen, setAddUserOpen, addNewUserFormData, setAddNewUserFormData }}>
            {children}
        </UserContext.Provider>
    )
}
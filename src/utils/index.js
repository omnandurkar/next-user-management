
export const addNewUserFormControl = [

    {
        label: 'First Name',
        name: 'firstName',
        type: 'input',
        placeholder: 'Enter your first name',

        // required: true
    },
    {
        label: 'Last Name',
        name: 'lastName',
        type: 'input',
        placeholder: 'Enter your last name',
        // required: true
    },
    {
        label: 'E mail',
        name: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        // required: true
    },
    {
        label: 'Address',
        name: 'address',
        type: 'input',
        placeholder: 'Enter your address',
        // required: true
    }
]

export const addNewUserInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    address: ''
};
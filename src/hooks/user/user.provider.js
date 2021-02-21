import React, { useReducer } from 'react';
import { UserReducer } from './reducer/user.reducer';
import UserContext from './user.context';

const UserProvider = (props) => {
    const {children} = props;

    const initialState = {
        name: 'Fernanda Montes',
        position: 'Licenciada',
        avatar: 'https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg?size=626&ext=jpg&ga=GA1.2.219402809.1594166400'
    };

    const [state, setState] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
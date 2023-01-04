import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('accessToken');
                navigate('/login')
            })
            .catch(error => console.error(error.message))
    }
    return (
        <div className='text-center'>
            <p className='text-3xl text-danger'>Opp! Something went wrong!</p>
            <p>{error.statusText || error.message}</p>
            <h4 className='text-xl'>Please <button className='btn-link' onClick={handleLogOut}>Logout</button> and Log back again</h4>
        </div>
    );
};

export default DisplayError;
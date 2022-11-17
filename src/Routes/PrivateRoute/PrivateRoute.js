import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <div className='min-h-screen w-full grid place-items-center'><progress className="progress w-56"></progress></div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
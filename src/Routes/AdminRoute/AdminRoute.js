import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className='min-h-screen w-full grid place-items-center'><progress className="progress w-56"></progress></div>
    }

    if (user && isAdmin) {
        return children
    }

    logOut()
        .then(() => {
            toast.error('You dont have permission')
        })

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
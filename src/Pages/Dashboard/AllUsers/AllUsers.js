import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-nuruddin-adnan.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://doctors-portal-server-nuruddin-adnan.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount === 1) {
                    refetch();
                    toast.success('Create Admin Successfully');
                }
            })

    }

    const handleDelete = id => {
        fetch(`https://doctors-portal-server-nuruddin-adnan.vercel.app/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                refetch();
                toast.success('User Delet Successfully')
            })
            .catch(error => toast(error.message))
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl mb-5 font-bold'>All users</h3>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>User role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.createdAt}</td>
                                <td>
                                    {
                                        user?.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm btn-gradient'>Make Admin</button>
                                            :
                                            'Admin'
                                    }
                                </td>
                                <td>
                                    <label onClick={() => setDeletingUser(user._id)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>

                                    {/* <button onClick={() => handleDelete(user._id)} className='btn btn-sm btn-error'>Delete</button> */}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deletingUser && <ConfirmationModal
                    title='Are you sure to delete'
                    message='If you delete you cant revert this back'
                    closeModal={() => setDeletingUser(null)}
                    successAction={handleDelete}
                    modalData={deletingUser}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;
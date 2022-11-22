import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
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

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl mb-5 font-bold'>All users</h3>
            <div className="overflow-x-auto">
                <table className="table table-normal w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Admin</th>
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
                                <td><button className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
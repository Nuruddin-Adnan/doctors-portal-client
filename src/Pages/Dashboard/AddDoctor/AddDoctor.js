import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    useTitle('Add Doctor');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_Key;

    const { data: specialities, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-nuruddin-adnan.vercel.app/appointmentSpeciality')
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: imgData.data.url
                    }

                    // Save doctor information to database
                    fetch('https://doctors-portal-server-nuruddin-adnan.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                document.getElementById('addDoctorForm').reset();
                                toast.success('Doctor Add successfully')
                                navigate('/dashboard/managedoctors')
                            }
                        })
                } else {
                    toast.error('Please upload an image')
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl mb-5 font-bold'>Add a New Doctor</h3>
            <div className="card lg:max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <form id="addDoctorForm" onSubmit={handleSubmit(handleAddDoctor)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" {...register("name", {
                                required: 'Name field is required'
                            })} />
                            {
                                errors.name &&
                                <label className="label">
                                    <span className="label-text-alt text-error">{errors.name?.message}</span>
                                </label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: 'Email field is required' })} />
                            {
                                errors.email &&
                                <label className="label">
                                    <span className="label-text-alt text-error">{errors.email?.message}</span>
                                </label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Speciality</span>
                            </label>
                            <select className="select select-bordered w-full" {...register("speciality", { required: 'Please Select a Specility' })}>
                                {
                                    specialities.map(speciality => <option value={speciality.name} key={speciality._id}>{speciality.name}</option>)
                                }
                            </select>
                            {
                                errors.speciality &&
                                <label className="label">
                                    <span className="label-text-alt text-error">{errors.speciality?.message}</span>
                                </label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full" {...register("image", { required: 'Please Upload an image' })} />
                            {
                                errors.image &&
                                <label className="label">
                                    <span className="label-text-alt text-error">{errors.image?.message}</span>
                                </label>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
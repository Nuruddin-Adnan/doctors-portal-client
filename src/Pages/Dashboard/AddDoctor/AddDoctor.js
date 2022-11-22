import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const handleAddDoctor = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h3 className='text-3xl mb-5 font-bold'>Add a New Doctor</h3>
            <div className="card lg:max-w-sm shadow-xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        {/* {
                                signUpError &&
                                <div className="alert alert-error shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{signUpError}</span>
                                    </div>
                                </div>
                            } */}
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
                                <span className="label-text">Specialty</span>
                            </label>
                            <select className="select select-bordered w-full" {...register("specialty", { required: 'Please Select a Specility' })}>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            {
                                errors.specialty &&
                                <label className="label">
                                    <span className="label-text-alt text-error">{errors.specialty?.message}</span>
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
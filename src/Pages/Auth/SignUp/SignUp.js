import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)

    const hangleSignup = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error.message))
    }

    return (
        <section className='lg:py-10 pt-5 lg:pt-10'>
            <div className="container">
                <div className="card max-w-sm mx-auto shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title justify-center">Signup</h3>
                        <form onSubmit={handleSubmit(hangleSignup)}>
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" {...register("password", {
                                    required: 'Password field is required',
                                    minLength: { value: 6, message: 'Password must be 6 character or more' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password must be contains al least one Uppercase, one Lowercase, One special letter and one number' }
                                })} />
                                {
                                    errors.password &&
                                    <label className="label">
                                        <span className="label-text-alt text-error">{errors.password?.message}</span>
                                    </label>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn">Signup</button>
                            </div>
                        </form>
                        <p className='text-center text-sm'>Already have an account? <Link to='/login' className='text-green'>Please Login</Link></p>
                        <div className='divider'>OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
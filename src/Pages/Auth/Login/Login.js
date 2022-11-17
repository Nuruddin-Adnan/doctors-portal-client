import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <section className='lg:py-10 pt-5 lg:pt-10'>
            <div className="container">
                <div className="card max-w-sm mx-auto shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title justify-center">Login</h3>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", {
                                        required: 'Email field is required'
                                    })}
                                    placeholder="email" className="input input-bordered" />
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
                                <input type="password" {...register("password",
                                    {
                                        required: 'Password field is required',
                                        minLength: { value: 6, message: 'password must be 6 character or more' }
                                    })} placeholder="password" className="input input-bordered" />
                                {
                                    errors.password &&
                                    <label className="label">
                                        <span className="label-text-alt text-error">{errors.password?.message}</span>
                                    </label>
                                }
                                <label className="label">
                                    <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn">Login</button>
                            </div>
                        </form>
                        <p className='text-center text-sm'>New to Doctors Portal? <Link to='/signup' className='text-green'>Create new account</Link></p>
                        <div className='divider'>OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
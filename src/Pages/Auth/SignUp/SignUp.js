import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { notify, createUser, updateUserProfile } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true })
    }

    const hangleSignup = data => {
        setSignUpError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user) {
                    const userInfo = {
                        displayName: data.name
                    }
                    updateUserProfile(userInfo)
                        .then(() => {
                            saveUser(user.displayName, user.email);
                        }).catch(error => setSignUpError(error.message))
                }
            })
            .catch(error => setSignUpError(error.message))
    }

    // save user data to database
    const saveUser = (name, email) => {
        const createdAt = new Date();
        const user = { name, email, createdAt };
        fetch('https://doctors-portal-server-nuruddin-adnan.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    notify('user create successfully')
                    reset({ data: '' })
                    setCreatedUserEmail(email)
                }
            })
    }

    return (
        <section className='lg:py-10 pt-5 lg:pt-10'>
            <div className="container">
                <div className="card max-w-sm mx-auto shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title justify-center">Signup</h3>
                        <form onSubmit={handleSubmit(hangleSignup)}>
                            {
                                signUpError &&
                                <div className="alert alert-error shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{signUpError}</span>
                                    </div>
                                </div>
                            }
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
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", {
                                    required: 'Password field is required',
                                    minLength: { value: 6, message: 'Password must be 6 character or more' },
                                    // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password must be contains al least one Uppercase, one Lowercase, One special letter and one number' }
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
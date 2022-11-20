import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn, googleSignIn, passwordReset, notify } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user) {
                    notify('Login successfull');
                    reset({
                        data: ''
                    });
                    navigate(from, { replace: true });
                }
            })
            .catch(error => setLoginError(error.message))
    }

    const handleGoogleSignIn = () => {
        setLoginError('');
        googleSignIn()
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate(from, { replace: true });
                    notify('Login successfull');
                }
            })
            .catch(error => setLoginError(error.message))
    }

    const handleSetEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordReset = () => {
        setLoginError('');
        passwordReset(email)
            .then(() => {
                notify('password reset email send to your email. Please check and reset password');
            })
            .catch(error => setLoginError(error.message))
    }




    return (
        <section className='lg:py-10 pt-5 lg:pt-10'>
            <div className="container">
                <div className="card max-w-sm mx-auto shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title justify-center">Login</h3>
                        {
                            loginError &&
                            <div className="alert alert-error shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{loginError}</span>
                                </div>
                            </div>
                        }
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", {
                                        required: 'Email field is required'
                                    })}
                                    onBlur={handleSetEmail}
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
                                    <button type='button' onClick={handlePasswordReset} className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn">Login</button>
                            </div>
                        </form>
                        <p className='text-center text-sm'>New to Doctors Portal? <Link to='/signup' className='text-green'>Create new account</Link></p>
                        <div className='divider'>OR</div>
                        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
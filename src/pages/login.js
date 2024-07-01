import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signup.css';
import Logo from '../assets/DBlog.png';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://tracker.standardlife.org.ng/api/login', {
                email,
                password,
            });
            setMessage({ type: 'success', text: 'Login successful!' });
            console.log('Login successful:', response.data);
            // Handle login success (e.g., redirect to another page, save token, etc.)
        } catch (error) {
            setMessage({ type: 'error', text: 'Login failed. Please try again.' });
            console.error('Login failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="d-flex justify-content-center align-items-center">
            <div className="p-4 col-12 col-md-6 col-xl-4">
                <div className='col-12 text-center mb-5 mt-2'>
                    <img src={Logo} alt='logo'/>
                    <h1>Welcome Back</h1>
                    <p>Please enter your details</p>
                </div>

                {message.text && (
                    <div className={`alert ${message.type === 'error' ? 'alert-danger' : 'alert-success'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <div className='mb-3 email'>
                            <label htmlFor="email" className='col-12 mb-1'>Email Address</label>
                            <input
                                type='email'
                                placeholder='Enter email address'
                                className='col-1 rounded-2 justify-content-around form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='mb-1 password'>
                            <label htmlFor="password" className='col-12 mb-1'>Enter Password</label>
                            <div className='d-flex col-12 input'>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    className="col-11"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    className="col-1"
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? <BsEye /> : <BsEyeSlash />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex col-12 mb-5'>
                        <div className='col-6'>
                            <label htmlFor="remember" className=''>
                                <input className='form-check-input rounded-1' type='checkbox'/> Remember me
                            </label>
                        </div>

                        <div className="col-6 text-end">
                            <Link className='forgotPassword'>Forget password</Link>
                        </div>
                    </div>

                    <div className='login rounded-3'>
                        <button type='submit' className='btn btn-lg col-12 mb-1 text-white border-0' disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>

                    <div className='col-12 text-center mt-2'>
                        <p>Don't have an account? <Link to="/"><span>Create account</span></Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signup.css';
import Logo from '../assets/DBlog.png';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [conditions, setConditions] = useState({
        length: false,
        specialChar: false,
        upperLowerCase: false,
        number: false,
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setConditions({
            length: newPassword.length >= 8,
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
            upperLowerCase: /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword),
            number: /[0-9]/.test(newPassword),
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match' });
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('https://tracker.standardlife.org.ng/api/register', {
                full_name,
                email,
                password,
            });
            setMessage({ type: 'success', text: 'Registration successful!' });
        } catch (error) {
            setMessage({ type: 'error', text: 'Registration failed. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="d-flex justify-content-center align-items-center">
            <div className="p-4 col-12 col-md-6 col-xl-4">
                <div className='col-12 text-center'>
                    <img src={Logo} alt='logo' />
                    <h1>Create an account</h1>
                    <p>Post, manage your blogs. Keep up with audience.</p>
                </div>

                {message.text && (
                    <div className={`alert ${message.type === 'error' ? 'alert-danger' : 'alert-success'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <div className='mb-3 fullname'>
                            <label htmlFor="full-name" className='col-12 mb-1'>Full Name</label>
                            <input
                                type='text'
                                placeholder='Enter fullname'
                                className='col-1 rounded-2 justify-content-around form-control'
                                value={full_name}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

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

                        <div className='mb-3 password'>
                            <label htmlFor="password" className='col-12 mb-1'>Create Password</label>
                            <div className='d-flex col-12 input'>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    className="col-11"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={handlePasswordChange}
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

                        <div className='mb-3 password'>
                            <label htmlFor="confirm-password" className='col-12 mb-1'>Confirm Password</label>
                            <div className='d-flex col-12 input'>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    className="col-11"
                                    placeholder="Enter password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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

                        <div className='row verify'>
                            <div className='col-12 col-lg-6 mb-1'>
                                <label className='py-1'>
                                    <input type='radio' checked={conditions.length} readOnly /> At least 8 Characters
                                </label>
                            </div>
                            <div className='col-12 col-lg-6 mb-1'>
                                <label className='py-1'>
                                    <input type='radio' checked={conditions.specialChar} readOnly />
                                    At least one special character
                                </label>
                            </div>
                            <div className='col-12 col-lg-6 mb-1'>
                                <label className='py-1'>
                                    <input type='radio' checked={conditions.upperLowerCase} readOnly />
                                    Uppercase and Lowercase
                                </label>
                            </div>
                            <div className='col-12 col-lg-6 mb-1'>
                                <label className='py-1'>
                                    <input type='radio' checked={conditions.number} readOnly />
                                    At least a number
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='submit rounded-3'>
                        <button type='submit' className='btn btn-lg col-12 mb-1' disabled={loading}>
                            {loading ? 'Creating account...' : 'Create account'}
                        </button>
                    </div>

                    <div className='col-12 text-center mt-2'>
                        <p>Already have an account? <Link to="/login"><span>Login</span></Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Signup;

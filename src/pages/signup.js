import React, { useState } from 'react'
import '../styles/signup.css'
import Logo from '../assets/DBlog.png'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [conditions, setConditions] = useState({
        length: false,
        specialChar: false,
        upperLowerCase: false,
        number: false,
      });

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
  return (
    <section className="d-flex justify-content-center align-items-center">
        <div className="p-4 col-12 col-md-6 col-xl-4">
            <div className='col-12 text-center'>             
                <img src={Logo} alt='logo'/>
                <h1>Create an account</h1>
                <p>Post, manage your blogs. Keep up with audience.</p>
            </div>
    
            <form>
                <div className='mb-4'>
                    <div className='mb-3 fullname'>
                        <label for="full-name" className='col-12 mb-1'>Full Name</label>
                        <input type='text' placeholder='Enter fullname' className='col-1 rounded-2 justify-content-around form-control'/>
                    </div>

                    <div className='mb-3 email'>
                        <label for="email" className='col-12 mb-1'>Email Address</label>
                        <input type='email' placeholder='Enter email address' className='col-1 rounded-2 justify-content-around form-control'/>
                    </div>

                    <div className='mb-3 password'>
                        <label for="password" className='col-12 mb-1'>Create Password</label>

                        <div className=' d-flex col-12 input'>
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
                        <label for="confirm-password" className='col-12 mb-1'>Confirm Password</label>
                        
                        <div className=' d-flex col-12 input'>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                className="col-11"
                                placeholder="Enter password"
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
                            <label className=' py-1'>
                                <input type='radio' className='' checked={conditions.length} readOnly/>At least 8 Characters
                            </label>
                        </div>

                        <div className='col-12 col-lg-6 mb-1'>
                            <label className=' py-1'>
                                <input type='radio' className='' checked={conditions.specialChar} readOnly/>
                                At least one special character
                            </label>
                        </div>

                        <div className='col-12 col-lg-6 mb-1'>
                            <label className=' py-1'>
                                <input type='radio' className='' checked={conditions.upperLowerCase} readOnly/>
                                Uppercase and Lowercase
                            </label>
                        </div>

                        <div className='col-12 col-lg-6 mb-1 d-flex'>
                            <label className=' py-1'>
                                <input type='radio' className='' checked={conditions.number} readOnly/>
                                Atleast a number
                            </label>
                        </div>
                    </div>
                </div>

                <div className='submit'>
                    <button className='btn btn-lg col-12 mb-1'>Create account</button>                    
                </div>

                <div className='col-12 text-center mt-2'>
                    <p>Already have an accound?  <Link to="/login"><span>Login</span></Link></p>
                </div>

            </form>
        </div>
    </section>
  )
}

export default Signup
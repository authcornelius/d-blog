import React, { useState } from 'react'
import '../styles/signup.css'
import Logo from '../assets/DBlog.png'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
  return (
    <section className="d-flex justify-content-center align-items-center">
        <div className="p-4 col-12 col-md-6 col-xl-4">
            <div className='col-12 text-center mb-5 mt-2'>             
                <img src={Logo} alt='logo'/>
                <h1>Welcome Back</h1>
                <p>Please enter your details</p>
            </div>
    
            <form>
                <div className='mb-2'>
                    <div className='mb-3 email'>
                        <label for="email" className='col-12 mb-1'>Email Address</label>
                        <input type='email' placeholder='Enter email address' className='col-1 rounded-2 justify-content-around form-control'/>
                    </div>

                    <div className='mb-1 password'>
                        <label for="password" className='col-12 mb-1'>Enter Password</label>

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
                </div>

                <div className='d-flex col-12 mb-5'>
                    <div className='col-6'>
                        <label for="remember" className=''>
                            <input className='form-check-input rounded-1'/> Remember me
                        </label>
                    </div>

                    <div className="col-6 text-end">
                        <Link className='forgotPassword'>Forget password</Link>
                    </div>
                </div>

                <div className='login'>
                    <button className='btn btn-lg col-12 mb-1 text-white'>Login</button>                    
                </div>

                <div className='col-12 text-center mt-2'>
                    <p>Don't have an account? <Link to="/"><span>Create account</span></Link></p>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Login
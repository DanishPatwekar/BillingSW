import React, { useState } from 'react';
import './signup.css';
import { useFormik } from 'formik';
import { Validation } from './Validation.js';

const SignUp = () => {
    const [isActive, setIsActive] = useState(true);

    const initialValues = {
        namec: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
        pin: ""
    };

    const { errors, values, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: Validation,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await fetch('http://localhost:8085/registercustomer', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(values)
                });

                if (response.ok) {
                    const data = await response.json();
                    alert("User Account Created! Please go to the login tab and log in.");
                    console.log(data);
                    resetForm();
                } else {
                    alert("Failed to create an account.");
                }
            } catch (error) {
                console.log("Error submitting the form", error);
            }
        }
    });

    return (
        <>
            <div className="container">
                <div className="form-container">
                    <div className="form-toggle">
                        <button className={isActive ? 'active' : ""} onClick={() => setIsActive(true)}>Sign In</button>
                        <button className={!isActive ? 'active' : ""} onClick={() => setIsActive(false)}>Sign Up</button>
                    </div>
                    {isActive ? (
                        <div className="form signin">
                            <form>
                                <h1>Sign In</h1>
                                <label htmlFor='email'>Email</label>
                                <input type="email" name="email" id="email" placeholder='Enter Your Email-id' />
                                <label htmlFor='pass'>Password</label>
                                <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                                <button id='signin'>Sign In</button>
                                <p id='footer'>Not a Member? <a href="#" onClick={(e) => { e.preventDefault(); setIsActive(false); }}>Sign Up</a></p>
                            </form>
                        </div>
                    ) : (
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <h1>Create Account</h1>
                                <label htmlFor='namec'>Full Name</label>
                                <input type="text" id="namec" name="namec" value={values.namec} placeholder='Enter Your Full Name' onChange={handleChange} onBlur={handleBlur} />
                                {errors.namec && touched.namec && (<p className='showerror'>{errors.namec}</p>)}

                                <label htmlFor='email'>Email</label>
                                <input type="email" name="email" id="email" value={values.email} placeholder='Enter Your Email-id' onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email && (<p className='showerror'>{errors.email}</p>)}

                                <label htmlFor='password'>Password</label>
                                <input type="password" name="password" id="password" value={values.password} placeholder='Enter Your Password' onChange={handleChange} onBlur={handleBlur} />
                                {errors.password && touched.password && (<p className='showerror'>{errors.password}</p>)}

                                <label htmlFor='mobile'>Phone Number</label>
                                <input type="tel" name="mobile" id="mobile" value={values.mobile} placeholder='Enter Your Mobile' onChange={handleChange} onBlur={handleBlur} />
                                {errors.mobile && touched.mobile && (<p className='showerror'>{errors.mobile}</p>)}

                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" id="address" value={values.address} placeholder='Enter Your Address' onChange={handleChange} onBlur={handleBlur} />
                                {errors.address && touched.address && (<p className='showerror'>{errors.address}</p>)}

                                <label htmlFor='pin'>Pincode</label>
                                <input type="text" name="pin" id='pin' value={values.pin} placeholder='Enter Your PinCode' onChange={handleChange} onBlur={handleBlur} />
                                {errors.pin && touched.pin && (<p className='showerror'>{errors.pin}</p>)}

                                <button type='submit'>Sign Up</button>  
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SignUp;

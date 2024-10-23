import React from 'react'
import './signup.css'
import { useState} from 'react'
const SignUp = () => {
    const [isActive, setIsActive] = useState(true);

  return (
    <>
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isActive ? 'active' : ""} onClick={()=>setIsActive(true)}>Sign In</button>
                    <button className={!isActive ? 'active' : ""}onClick={()=>setIsActive(false)}>Sign Up</button>
                </div>
                {isActive ? <><div className="form signin">
                    <form action="">
                        <h1>Sign In</h1>
                        <label>Email</label>
                        <input type="email" name="cemail" id="cemail" placeholder='Enter Your Email-id' />
                        <label>Password</label>
                        <input type="password" name="pass" id="pass" placeholder='Enter Your Password' />
                        <button id='signin'>Sign In</button>
                        <p id='footer'>Not a Member?<a href="#" onClick={()=>setIsActive(false)}>SignUp</a></p>
                    </form>
                </div>
                </>: <>
                <div className="form">
                <form>
                    <h1>Create Account</h1>
                    <label>Full Name</label>
                    <input type="text" id="firstName"  name="fullName" required placeholder='Enter Your Full Name'/>

                    <label>Email</label>
                    <input type="email" name="cemail" id="cemail" placeholder='Enter Your Email-id'/>
                    <label>Password</label>
                    <input type="password" name="pass" id="pass"placeholder='Enter Your Password' />

                    <label>Phone Number</label>
                    <input type="tel" name="mobile" id="mobile" placeholder='Enter Your Mobile'/>

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder='Enter Your Address'/>

                    <label>Pincode</label>
                    <input type="text"  name="pin" placeholder='Enter Your PinCode'/>

                    <button >Sign Up</button>  
                </form>
            </div>
                </>}
            </div>
        </div>
        
        
    </>
  )
}

export default SignUp
import React from 'react'
import { NavLink,BrowserRouter, Routes, Route } from 'react-router-dom'
import './navbar.css'
import SignUp from './SignUp'
import Home from './Home'
import About from './About'
import Contactus from './Contactus'
const NavBar = () => {
  return (
        <>
          <BrowserRouter>
            <div className='navbar'>        
                <img src="logo.png" alt="" />
                <ul className='nav'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contactus'>Contact Us</NavLink></li>
                    <NavLink to='/SignUp'><img src="profile.png" alt="" id='im' /></NavLink>
                </ul>
            </div>    
            <Routes>
                <Route path='/' element={<><Home/></>}/>
                <Route path='/about' element={<><About/></>}/>
                <Route path='/contactus' element={<><Contactus/></>}/>
                <Route path='/SignUp' element={<><SignUp/></>}/>
            </Routes>  
         </BrowserRouter>
         

        </>
  )
}

export default NavBar

import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './contact.css'
const Contactus = () => {
    return (
        <div className='contact'>
            <form action="">
                    <label>Name</label>
                    <input type="text" name="name" id="cemail" placeholder='Enter Your Name' className='inputbox' />
                    <label>Mobile</label>
                    <input type="tel" name="" placeholder='Enter Your Mobile Number' className='inputbox' />
                    <label>Message</label>
                    <input type="text" name="" className='inputbox' />
                    <button id='send'>Sign In</button>
            </form>
            <div className="icon">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='mediaicon'>
                <FaFacebook size={30} color="#3b5998" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='mediaicon'>
                <FaInstagram size={30} color="#C13584" />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className='mediaicon'>
                <FaWhatsapp size={30} color="#25D366" />
            </a>

            </div>
        </div>
    );
};

export default Contactus;

import React from 'react';
import './Footer.css';
import logo from '../../img/logo.png'

const Footer = () => {
    return (
        <section className='footer-container'>
            <p className='text-center text-light py-5'>
                <img src={logo} alt="" height="40px" className='me-3'/>
                <span>Copyright Reserved by Learn with Fun &#169; 2022</span>
            </p>
        </section>
    );
};

export default Footer;
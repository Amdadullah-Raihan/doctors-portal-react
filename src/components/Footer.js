import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <h1>Footer</h1>
            <div className="icons-container">
                <p> <i class="icons fa-brands fa-facebook-f"></i></p>
                <p> <i class="icons fa-brands fa-twitter"></i></p>
                <p> <i class="icons fa-brands fa-linkedin-in"></i></p>
                <p> <i class="icons fa-brands fa-tiktok"></i></p>
            </div>
        </div>
    );
};

export default Footer;
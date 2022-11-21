import React from 'react';
import './Footer.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer-about">
                {/* <h1><img className='footer-logo' src={logo} alt="" /></h1> */}
                <div>
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem accusantium consequatur vitae ipsum vel dolorem itaque. Nostrum, iure! Quod ipsum quam rerum obcaecati repellendus quas laudantium aut soluta fuga?</p>
                </div>
                <div className="icons-container">
                    <p> <i class="icons fa-brands fa-facebook-f"></i></p>
                    <p> <i class="icons fa-brands fa-twitter"></i></p>
                    <p> <i class="icons fa-brands fa-linkedin-in"></i></p>
                    <p> <i class="icons fa-brands fa-tiktok"></i></p>
                </div>
            </div>
            <div className="quick-links">
                <h3>Quick Links</h3>
                <Link><i class="fa-solid fa-play"></i> Home</Link>
                <Link><i class="fa-solid fa-play"></i> About Us</Link>
                <Link><i class="fa-solid fa-play"></i> Services</Link>
                <Link><i class="fa-solid fa-play"></i> Doctors</Link>
            </div>
        </div>
    );
};

export default Footer;
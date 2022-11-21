import React from 'react';
import { Carousel } from 'react-bootstrap';
import hero1 from '../images/hero-1.jpg'
import hero2 from '../images/hero-2.jpg'
import hero3 from '../images/hero-3.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="hero-transparent">

            </div>
            <div className="hero-info-container">
                <h1>We provide medical services that you can trust!</h1>
                <div className="hero-btn-container">
                    <button className='btn-primary'>Get Appointment</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
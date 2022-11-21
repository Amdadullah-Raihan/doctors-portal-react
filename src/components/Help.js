import React from 'react';
import './Help.css';
import sectionImg from '../images/section-img.png'

const Help = () => {
    return (
        <div className='help-section'>
            <div className="help-info-container">
                <h1>We Are Always Ready To Help You & Your Family</h1>
                <img src={sectionImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            </div>
            <div className="help-container container">
                <div className='help-card'>
                    <div className='help-icon-container'>
                        <i class="fa-solid fa-truck-medical"></i>
                    </div>
                    <div className='help-text-container'>
                        <h4>Emergency Help</h4>
                        <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                    </div>
                </div>
                <div className='help-card'>
                    <div className='help-icon-container'>
                        <i class="fa-solid fa-briefcase-medical"></i>
                    </div>
                    <div className='help-text-container'>
                        <h4>Enriched Pharmecy</h4>
                        <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                    </div>
                </div>
                <div className='help-card'>
                    <div className='help-icon-container'>
                        <i class="fa-solid fa-stethoscope"></i>
                    </div>
                    <div className='help-text-container'>
                        <h4>Medical Treatment</h4>
                        <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
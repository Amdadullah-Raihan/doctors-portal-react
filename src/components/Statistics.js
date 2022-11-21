import React from 'react';
import './Statistics.css'

const Statistics = () => {
    return (
        <div className='statistics-section'>
            <div className="transparent-div">

            </div>
            <div className="statistics-container">
                <div className='statistics-card'>
                    <div className="statistics-icon-container">
                        <i class="fa-solid fa-house-chimney"></i>
                    </div>
                    <div className='statistics-text-container'>
                        <h1>3426</h1>
                        <p>Hospital Rooms</p>
                    </div>
                </div>
                <div className='statistics-card'>
                    <div className="statistics-icon-container">
                        <i class="fa-solid fa-user-large"></i></div>
                    <div className='statistics-text-container'>
                        <h1>557</h1>
                        <p>Specialist Doctors</p>      
                    </div>
                </div>
                <div className='statistics-card'>
                    <div className="statistics-icon-container">
                        <i class="fa-regular fa-face-smile"></i></div>
                    <div className='statistics-text-container'>
                        <h1>3342</h1>
                        <p>Happy Patients</p>
                    </div>
                </div>
                <div className='statistics-card'>
                    <div className="statistics-icon-container">
                         <i class="fa-regular fa-calendar-days"></i></div>
                    <div className='statistics-text-container'>
                        <h1>32</h1>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Statistics;
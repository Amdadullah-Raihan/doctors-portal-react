import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Ooops!! The page you are looking for was not found!</h1>
            <Link to='/'><button>Go Back to home</button></Link>
        </div>
    );
};

export default NotFound;
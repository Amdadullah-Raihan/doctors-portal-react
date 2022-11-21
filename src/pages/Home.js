import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ImportantInfo from '../components/ImportantInfo';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ImportantInfo></ImportantInfo>
           
        </div>
    );
};

export default Home;
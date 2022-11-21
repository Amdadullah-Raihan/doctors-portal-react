import React from 'react';
import { Link } from 'react-router-dom';
import Help from '../components/Help';
import Hero from '../components/Hero';
import ImportantInfo from '../components/ImportantInfo';
import Statistics from '../components/Statistics';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ImportantInfo></ImportantInfo>
            <Help></Help>
            <Statistics></Statistics>
           
        </div>
    );
};

export default Home;
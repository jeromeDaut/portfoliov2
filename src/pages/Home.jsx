import React from 'react';
import Navigation from '../components/navigation/Navigation';
import About from '../components/AboutMe/About';
import Cards from '../components/projectCards/Cards';

const Home = () => {
    return (
        <>
            <Navigation />
            <main>
            <About/>
            <Cards/>
            </main>
        </>
    );
};

export default Home;
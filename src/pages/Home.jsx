import React from 'react';
import Navigation from '../components/navigation/Navigation';
import About from '../components/AboutMe/About';
import Cards from '../components/projectCards/Cards';
import Skills from '../components/skills/Skills';
import Form from '../components/Form/Form';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <>
            <Navigation />
            <main>
            <About/>
            <Skills />
            <Cards/>
            <Form />
            </main>
            <Footer />
        </>
    );
};

export default Home;
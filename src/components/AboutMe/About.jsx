import React from 'react';
import portrait from '../../assets/images/portrait.jpg'
const About = () => {
    return (
        
        <section className="about-me" id='about'>
            <div className="about-me__image">
                <img src={portrait} alt="" />
            </div>
            <div className="about-me__content">
                <h1 className="about-me__title">Jérôme Dautrême</h1>
                <h2 className="about-me__subtitle">Développeur Front-end</h2>
            </div>
        </section>
    );
};

export default About;
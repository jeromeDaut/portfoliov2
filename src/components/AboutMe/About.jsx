import React from 'react';
import portrait from '../../assets/images/portrait.jpg'
const About = () => {
    return (
        
        <section className="about-me" id='about'>
            <div className="about-me__image">
                <img src={portrait} alt="" />
            </div>
            <div className="about-me__content">
                <h2 className="about-me__title">Jérôme Dautrême</h2>
                <h3 className="about-me__subtitle">Développeur Front-end</h3>
            </div>
        </section>
    );
};

export default About;
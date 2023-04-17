import React from 'react';
import portrait from '../../assets/images/portrait.jpg'
const About = () => {
    return (
        
        <section className="about-me">
            <div className="about-me__image">
                <img src={portrait} alt="" />
            </div>
            <div className="about-me__content">
                <h2 className="about-me__title">Jérôme Dautrême</h2>
                <h3 className="about-me__subtitle">Développeur Front-end</h3>
                <p className="about-me__description">À 40 ans, je suis prêt à relever un nouveau défi en me reconvertissant dans le développement web front-end. En quête d’une alternance pour parfaire mes compétences, je suis déterminé à apporter ma créativité à l'entreprise qui m'accordera sa confiance </p>
            </div>
        </section>
    );
};

export default About;
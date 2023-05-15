import React, { useState } from 'react';
import portrait from '../../assets/images/portrait.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`about-me ${isExpanded ? 'expanded' : ''}` }id="about">
      <Link
        className={`about-me__container ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleExpansion}
      >
        <div className="about-me__image">
          <img src={portrait} alt="" />
        </div>
        <div className="about-me__content">
          <h1 className="about-me__title">Jérôme Dautrême</h1>
          <h2 className="about-me__subtitle">Développeur Front-end</h2>
        </div>
      </Link>
      <div className={`about-me__text ${isExpanded ? 'expanded' : ''}`}>
        <p>
          
Bonjour ! <br/><br/>Je suis en reconversion professionnelle dans le développement web front-end. Après une carrière réussie en tant que chef de cuisine, j'ai décidé de suivre ma passion pour la programmation. J'ai suivi avec succès une formation de neuf mois chez OpenClassrooms, au cours de laquelle j'ai acquis des compétences solides en HTML, CSS, JavaScript, React, ainsi que d'autres compétences telles que le greenCode, le SEO et les méthodes Agile.<br/><br/> Mon expérience en tant que chef de cuisine m'a permis de développer ma créativité, ma précision et un sens aigu de l'esthétique, que j'applique désormais dans ma carrière de développeur front-end.<br/> <br/>Actuellement, je suis à la recherche d'une entreprise accueillante pour effectuer une alternance, afin de mettre en pratique mes connaissances et d'acquérir une expérience concrète auprès d'experts du domaine. Passionné, déterminé et avide de défis, je suis convaincu que ma transition réussie et ma combinaison unique d'expériences feront de moi un atout précieux pour toute équipe de développement. Je suis impatient de contribuer à des projets innovants et de continuer à grandir en tant que professionnel du développement
        </p>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';

const Skills = () => {
    return (
        <section className='skills'>
            <SectionTitle id="skills" />
            <ul className='skills__container'>
                <li className='skills__item' title='Git'><i className='bx bxl-git' ></i></li>
                <li className='skills__item' title='Github'><i className='bx bxl-github'></i></li>
                <li className='skills__item' title='HTML5'><i className='bx bxl-html5' ></i></li>
                <li className='skills__item' title='CSS3'><i className='bx bxl-css3' ></i></li>
                <li className='skills__item' title='SASS'><i className='bx bxl-sass' ></i></li>
                <li className='skills__item' title='JavaScript'><i className='bx bxl-javascript' ></i></li>
                <li className='skills__item' title='React'><i className='bx bxl-react' ></i></li>
                <li className='skills__item' title='Bootstrap'><i className='bx bxl-bootstrap' ></i></li>
                <li className='skills__item' title='Figma'><i className='bx bxl-figma'></i></li>
            </ul>
        </section>
    );
};

export default Skills;
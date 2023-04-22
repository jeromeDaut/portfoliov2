import React from 'react';

const Skills = () => {
    return (
        <section className='skills'>
            <div className='skills__banner' id='skills'>
                <h2>Mes Compétences</h2>
            </div>
            <ul className='skills__container'>
                <li className='skills__item'><i className='bx bxl-git' ></i></li>
                <li className='skills__item'><i className='bx bxl-github'></i></li>
                <li className='skills__item'><i className='bx bxl-html5' ></i></li>
                <li className='skills__item'><i className='bx bxl-css3' ></i></li>
                <li className='skills__item'><i className='bx bxl-sass' ></i></li>
                <li className='skills__item'><i className='bx bxl-javascript' ></i></li>
                <li className='skills__item'><i className='bx bxl-react' ></i></li>
                <li className='skills__item'><i className='bx bxl-bootstrap' ></i></li>
                <li className='skills__item'><i className='bx bxl-figma'></i></li>
            </ul>
        </section>
    );
};

export default Skills;
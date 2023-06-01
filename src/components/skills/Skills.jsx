import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { SiSwagger } from 'react-icons/si';

const skillItems = [
  { id: 1,category: 'outils', title: 'Git', icon: 'bx bxl-git', bg_color: 'linear-gradient(45deg,#E84E31 .29%,#f09152 50.14%,#f06e46)' },
  { id: 2,category: 'outils', title: 'Github', icon: 'bx bxl-github', bg_color: 'linear-gradient(225deg,#99daff .14%,#a966ff 99.86%)' },
  { id: 3, category: 'outils', title: 'Figma', icon: 'bx bxl-figma', bg_color: 'linear-gradient(225deg,#ffd6bf .14%,#ff7272 99.86%)' },
  { id: 4,category: 'front',  title: 'HTML5', icon: 'bx bxl-html5', bg_color: 'linear-gradient(45deg,#DD4B25 .29%,#E96228 50.14%,#f5bb70)' },
  { id: 5,category: 'front', title: 'CSS3', icon: 'bx bxl-css3', bg_color: 'linear-gradient(225deg,#b1b5ff .07%,#4260ff 99.79%)' },
  { id: 6,category: 'front', title: 'SASS', icon: 'bx bxl-sass', bg_color: 'linear-gradient(225.22deg,#ffb5b5 .06%,#ff4fce 50.11%,#d256ff 100.15%)' },
  { id: 7,category: 'front', title: 'Bootstrap', icon: 'bx bxl-bootstrap', bg_color: 'linear-gradient(45deg,#89e3ff .29%,#cfffb8 50.14%,#ffe177)' },
  { id: 8,category: 'front', title: 'JavaScript', icon: 'bx bxl-javascript', bg_color: 'linear-gradient(45deg,#ffcca8 .21%,#fffa87 99.93%)' },
  { id: 9,category: 'front', title: 'React', icon: 'bx bxl-react', bg_color: 'linear-gradient(225.22deg,#93ffff -.09%,#59a5ff 100.01%)' },
  { id: 10,category: 'front', title: 'Redux', icon: 'bx bxl-redux', bg_color: 'linear-gradient(225.22deg,#aae0ff -.01%,#5affce 100.08%)' },
  { id: 11, category: 'outils', title: 'Swagger', icon:'', bg_color: 'linear-gradient(225deg,#81d875 .14%,#1a571c 99.86%)' },
];

const Skills = () => {
    const frontEndSkills = skillItems.filter(item => item.category === 'front');
    const tools = skillItems.filter(item => item.category === 'outils');
  
    return (
      <>
        <SectionTitle id="skills" />
        <section className='skills'>
          <div className='skills__container'>
            <div className='skills__category'>
              <h2>Front-End</h2>
              <ul>
                {frontEndSkills.map(item => (
                  <li key={item.id} className='skills__item skills__item--front' title={item.title} style={{ background: item.bg_color }}>
                    <i className={item.icon}></i>
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='skills__category'>
              <h2>Outils</h2>
              <ul>
                {tools.map(item => (
                  <li key={item.id} className='skills__item skills__item--tools' title={item.title} style={{ background: item.bg_color }}>
                  {item.id === 11 ? <SiSwagger className={item.icon} /> : <i className={item.icon}></i>}
                  <p>{item.title}</p>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Skills;
import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { SiOpenai,SiSwagger, SiJavascript, SiHtml5, SiCss3, SiSass, SiBootstrap, SiReact, SiRedux, SiGit, SiGithub, SiFigma, SiLaragon } from 'react-icons/si';

// Array of skill items
const skillItems = [
  { id: 1, category: 'outils', title: 'Git', icon: SiGit, bg_color: 'linear-gradient(45deg,#E84E31 .29%,#f09152 50.14%,#f06e46)' },
  { id: 2, category: 'outils', title: 'Github', icon: SiGithub, bg_color: 'linear-gradient(225deg,#99daff .14%,#a966ff 99.86%)' },
  { id: 3, category: 'outils', title: 'Figma', icon: SiFigma, bg_color: 'linear-gradient(225deg,#ffd6bf .14%,#ff7272 99.86%)' },
  { id: 4, category: 'front', title: 'HTML5', icon: SiHtml5, bg_color: 'linear-gradient(45deg,#DD4B25 .29%,#E96228 50.14%,#f5bb70)' },
  { id: 5, category: 'front', title: 'CSS3', icon: SiCss3, bg_color: 'linear-gradient(225deg,#b1b5ff .07%,#4260ff 99.79%)' },
  { id: 6, category: 'front', title: 'SASS', icon: SiSass, bg_color: 'linear-gradient(225.22deg,#ffb5b5 .06%,#ff4fce 50.11%,#d256ff 100.15%)' },
  { id: 7, category: 'front', title: 'Bootstrap', icon: SiBootstrap, bg_color: 'linear-gradient(45deg,#89e3ff .29%,#cfffb8 50.14%,#ffe177)' },
  { id: 8, category: 'front', title: 'JavaScript', icon: SiJavascript, bg_color: 'linear-gradient(45deg,#ffcca8 .21%,#fffa87 99.93%)' },
  { id: 9, category: 'front', title: 'React', icon: SiReact, bg_color: 'linear-gradient(225.22deg,#93ffff -.09%,#59a5ff 100.01%)' },
  { id: 10, category: 'front', title: 'Redux', icon: SiRedux, bg_color: 'linear-gradient(225.22deg,#aae0ff -.01%,#5affce 100.08%)' },
  { id: 11, category: 'outils', title: 'Swagger', icon: SiSwagger, bg_color: 'linear-gradient(225deg,#81d875 .14%,#1a571c 99.86%)' },
  { id: 12, category: 'outils', title: 'ChatGPT ', icon: SiOpenai , bg_color: 'linear-gradient(45deg,#16A180 .29%,#14d3a6 50.14%,#8efae1)' },
];

const Skills = () => {
    // Filter front-end skills and tools from skillItems
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
                  <li 
                    key={item.id} 
                    className='skills__item skills__item--front' 
                    title={item.title} 
                    style={{ background: item.bg_color }}>
                    <item.icon className={item.icon} />
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='skills__category'>
              <h2>Outils</h2>
              <ul>
                {tools.map(item => (
                  <li 
                    key={item.id} 
                    className='skills__item skills__item--tools' 
                    title={item.title} 
                    style={{ background: item.bg_color }}
                  >
                    <item.icon className={item.icon} />
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
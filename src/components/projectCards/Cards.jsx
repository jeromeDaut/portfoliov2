import React, { useState, useEffect } from 'react';
import ModalP from '../modal/ModalP';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Figure } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import 'boxicons'
const Cards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  // const [showCards, setShowCards] = useState(false);
  

  useEffect(() => {
    fetch('/cards.json')
      .then(response => response.json())
      .then(data => setCardsData(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425); 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card); 
    setModalShow(true);
  }
 
  return (
    <section className='project'>
      <SectionTitle id="project" />
      <div className='container'>
        
          <article className='container__project'>
            {cardsData.map(card => (
              
              <Figure 
              onClick={() => handleCardClick(card)} 
              className={`card btn btn-primary ${isMobile ? 'cardMobile' : 'cardDesktop'}`} 
              id='btn' 
              key={card.id}
              >
                <h3>{card.title}</h3>
                <img 
                className={`card__image ${isMobile ? 'card__imageMobile' : 'card__imageDesktop'}`} 
                src={isMobile ? card.coverMobile : card.cover} 
                alt={card.alt} 
                title={card.alt}
                loading='lazy'  
                />
              </Figure>
            ))}
            
            <ModalP
              show={modalShow}
              onHide={() => setModalShow(false)}
              card= {selectedCard}
            />
          </article>
        
      </div>
    </section>
  );
};

export default Cards;
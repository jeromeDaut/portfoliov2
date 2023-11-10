import React, { useState, useEffect } from 'react';
import ModalP from '../modal/ModalP';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Figure } from 'react-bootstrap';

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

// Fetching card data when component mounts
  useEffect(() => {
    fetch('/cards.json')
      .then(response => response.json())
      .then(data => setCardsData(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    // Handling window resizing
    const handleResize = () => {
      // Checking if the window width is less than or equal to 425 pixels
      setIsMobile(window.innerWidth <= 425); 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Calling the handleResize function initially 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (card) => { 
    setSelectedCard(card); // Setting the selected card
    setModalShow(true); // Opening the modal
  }
 
  return (
    <section className='project'>
      <SectionTitle id="project" />
      <div className='container'>
        
          <article className='container__project'>
            {[...cardsData].reverse().map(card => (
              
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
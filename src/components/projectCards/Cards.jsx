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
  // const [showCards, setShowCards] = useState(false);
  

  useEffect(() => {
    fetch('/cards.json')
      .then(response => response.json())
      .then(data => setCardsData(data))
      .catch(error => console.error(error));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card); // Stocker l'objet de carte sélectionné dans l'état selectedCard
    setModalShow(true);
  }
 
  return (
    <section className='project'>
      <SectionTitle id="project" />
      <div className='container'>
        
          <article className='container__project'>
            {cardsData.map(card => (
              <Figure onClick={() => handleCardClick(card)} className='card btn btn-primary' id='btn' key={card.id}>
                <img className='card__image' src={card.cover} alt='' />
                <figcaption>
                <h3 className='card__title'>{card.techno}</h3>
                </figcaption>
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
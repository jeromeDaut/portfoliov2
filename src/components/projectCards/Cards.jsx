import React, { useState, useEffect } from 'react';
import Button  from 'react-bootstrap/Button';
import ModalP from '../modal/ModalP';
import SectionTitle from '../sectionTitle/SectionTitle';
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
        
          <div className='container__project'>
            {cardsData.map(card => (
              <Button onClick={() => handleCardClick(card)} className='card btn btn-primary' id='btn' key={card.id}>
                <img className='card__image' src={card.cover} alt='' />
                <h3 className='card__title'>{card.techno}</h3>
              </Button>
            ))}
            
            <ModalP
              show={modalShow}
              onHide={() => setModalShow(false)}
              card= {selectedCard}
            />
          </div>
        
      </div>
    </section>
  );
};

export default Cards;
import React, { useState, useEffect } from 'react';
import image from '../../assets/images/image1.jpg';
// import './Cards.scss';

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [showCards, setShowCards] = useState(false);
  

  useEffect(() => {
    fetch('/cards.json')
      .then(response => response.json())
      .then(data => setCardsData(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = () => {
    setShowCards(!showCards);
  };

  return (
    <section className='project'>
      <h2 className='project__title'>Mes projets</h2>
      <div className='container'>
        <div className={`container__image ${showCards ? 'shifted' : ''}`} onClick={handleClick}>
          <img src={image} alt='' />
        </div>
        {showCards && (
          <div className='container__project'>
            {cardsData.map(card => (
              <div className='card' key={card.id}>
                <img className='card__image' src={card.cover} alt='' />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
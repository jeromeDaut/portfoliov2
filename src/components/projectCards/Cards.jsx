import React, { useState, useEffect } from 'react';
import Button  from 'react-bootstrap/Button';
import ModalP from '../modal/ModalP';
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
      <div className='project__banner'>
        <h2 className='project__title' id='project'>Projets</h2>
      </div>
      <div className='container'>
        {/* <div className={`container__image ${showCards ? 'shifted' : ''}`} onClick={handleClick}> */}
          {/* <img src={image} alt='' /> */}
        {/* </div> */}
        {/* {showCards && ( */}
          <div className='container__project'>
            {cardsData.map(card => (
              <Button onClick={() => handleCardClick(card)} className='card' key={card.id}>
                <img className='card__image' src={card.cover} alt='' />
                {/* {card.showLogo &&(
                  <div className='logo'>
                 <NavLink to={card.linkGithub} className='linkGithub'><box-icon color='#fff' name='link' ></box-icon></NavLink>
                 <NavLink to={card.linkPages} className='linkPages'><box-icon color='#fff'type='logo' name='github' className=''></box-icon></NavLink>
                 </div>
                 )} */}
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
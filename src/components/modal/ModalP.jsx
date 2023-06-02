import React, { useEffect, useState } from 'react';
import  Modal  from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
// import {cardsData} from '../projectCards/Cards'

const ModalP = (props) => {
  const {card} = props;
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title id="contained-modal-title-vcenter">
        <h2>{card ? card.title : ''}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='ImgModal'>
          <img src={isMobile ? card?.coverMobile : card?.cover} alt={card?.title}/>
        </div>
        <div className="containerModal">
          <div className='containerModal__target containerModal__target--title'>
            <h3>Objectif :</h3>
            <p className='containerModal__target--paragraph'>{card?.paragraph}</p>
          </div>
          <div className='containerModal__skills'>
            <h3>Compétences / Outils :</h3>
            <div className='containerModal__skills--center'>
              {card?.logo && 
              Object.keys(card.logo).map((key)=> (
              <img 
              className='containerModal__skills--logo' 
              src={card?.logo[key]} 
              key={key} 
              alt={`Logo ${key}`} />
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
  
    <div>
      <h3>Ressources externes :</h3>
      <div className='containerModal__links'>
            {card?.links && (
              <>
                {card.links.github && (
                  <div>
                    <Link to={card.links.github} target="_blank" rel="noopener noreferrer">
                      <h4>Github</h4>
                      <img className='containerModal__links--logo' title='Github' src={card.links.logoGithub} alt='GitHub' />
                    </Link>
                  </div>
                )}

                {card.links.pages && (
                  <div>
                    <Link to={card.links.pages} target="_blank" rel="noopener noreferrer">
                      <h4>Github Pages</h4>
                      <img className='containerModal__links--logo' title='Github Pages' src={card.links.logoPages} alt='Pages' />
                    </Link>
                  </div>
                )}

                {card.links.trello && (
                  <div>
                    <Link to={card.links.trello} target="_blank" rel="noopener noreferrer">
                      <h4>Trello</h4>
                      <img className='containerModal__links--logo' title='Trello' src={card.links.logoTrello} alt='Pages' />
                    </Link>
                  </div>
                )}

                {card.links.padlet && (
                  <div>
                    <Link to={card.links.padlet} target="_blank" rel="noopener noreferrer">
                      <h4>Padlet</h4>
                      <img className='containerModal__links--logo' title='Padlet' src={card.links.logoPadlet} alt='Pages' />
                    </Link>
                  </div>
                )}

                {card.links.oneDrive && (
                  <div>
                    <Link to={card.links.oneDrive} target="_blank" rel="noopener noreferrer">
                      <h4>OneDrive</h4>
                      <img className='containerModal__links--logo' title='OneDrive' src={card.links.logoOneDrive} alt='Pages' />
                    </Link>
                  </div>
                )}
              </>
            )}
      </div>
    </div>
      </Modal.Footer>
    </Modal>
  );
}
   
export default ModalP;
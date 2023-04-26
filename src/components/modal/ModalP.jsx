import React from 'react';
import  Modal  from 'react-bootstrap/Modal';
// import {cardsData} from '../projectCards/Cards'

const ModalP = (props) => {
  const {card} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h2>{card ? card.title : ''}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='ImgModal'>
          <img src={card?.cover} alt={card?.title} />
        </div>
        <div className="containerModal">
          <div className='containerModal__target containerModal__target--title'>
            <h3>Objectif</h3>
            <p className='containerModal__target--paragraph'>{card?.paragraph}</p>
          </div>
          <div className='containerModal__skills'>
            <h3>Compétences / Outils</h3>
            <div>

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
                <div>
                  <h3>Liens vers ressources externe</h3>
                </div>
                <div>{card?.li && 
            Object.keys(card.logo).map((key)=> (
            <img 
            className='containerModal__skills--logo' 
            src={card?.logo[key]} 
            key={key} 
            alt={`Logo ${key}`} />
            ))}

                </div>
              </div>
      </Modal.Footer>
    </Modal>
  );
}
   
export default ModalP;
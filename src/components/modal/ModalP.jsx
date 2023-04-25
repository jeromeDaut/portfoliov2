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
        {card ? card.title : ''}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='ImgModal'>
          <img src={card?.cover} alt={card?.title} />
        </div>
        <div className="containerModal">
          <div className='containerModal__target'>
            <h3>Objectif</h3>
            <p className='containerModal__target--paragraph'>{card?.paragraph}</p>
          </div>
          <div className='containerModal__skills'>
            <h3>Compétences</h3>
            <p className='containerModal__skills--techno'>{card?.techno}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}
   
export default ModalP;
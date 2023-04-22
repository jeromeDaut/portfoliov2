import React from 'react';
// import Button from '../projectCards/Cards';
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
        <p>{card?.paragraph}</p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}
   
export default ModalP;
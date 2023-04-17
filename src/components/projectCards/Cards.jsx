import React,{useState, useEffect} from 'react';
import image from '../../assets/images/image1.jpg';


const Cards = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
      fetch('/cards.json')
        .then(response => response.json())
        .then(data => setCardsData(data))
        .catch(error => console.error(error));
    }, []);

    return (
    <section className='project' >
        <h2 className="project__title">Mes projets</h2>
        <div className='container'>
            <div>
                <img className='container__image' src={image} alt="" />
            </div>
            <div className='container__project'>
                {cardsData.map(card => (
                <div className="card" key={card.id}>
                    <img className="card__image" src={card.cover} alt="" />
                    <h3 className="card__title">{card.title}</h3>
                    <p className="card__description">{card.paragraph}</p>
                </div>
            ))}
            </div>
        </div>
    </section>
    );
};

export default Cards;
import './Card.scss';
import data from '../../data/data.json';

function Card() {
  return (
    <div className="card">
      <div className="card__image-container">
        <img
          className="card__image"
          alt="text"
          width="110px"
          height="110px"
          // src="img"
          // srcset="img 2x"
        />
      </div>
      <p className="card__title">{data[0].name}</p>
    </div>
  );
}

export default Card;

import './Card.scss';

function Card() {
  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" alt="text" />
      </div>
      <p className="card__title">Name</p>
    </div>
  );
}

export default Card;

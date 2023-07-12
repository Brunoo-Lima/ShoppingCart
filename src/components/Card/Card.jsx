import './Card.css';
import { BsCartPlus } from 'react-icons/bs';
import propTypes from 'prop-types';

const Card = ({ data }) => {
  const { title, price, thumbnail } = data;

  return (
    <section className="card">
      <img src={thumbnail} alt="" className="card-image" />
      <div className="card-items">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-price">{price}</h2>
      </div>
      <button type="button" className="card-btn">
        <BsCartPlus />
      </button>
    </section>
  );
};

export default Card;

Card.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

import './Card.css';
import { BsCartPlus } from 'react-icons/bs';
import propTypes from 'prop-types';
import formatCurrency from '../../utilities/formatCurrency';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const Card = ({ data }) => {
  const { title, price, thumbnail } = data;

  const { cartItems, setCartItems } = useContext(UserContext);

  function handleAddCart() {
    setCartItems([...cartItems, data]);
  }

  return (
    <section className="card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="imagem produto"
        className="card-image"
      />
      <div className="card-items">
        <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button type="button" className="card-btn" onClick={handleAddCart}>
        <BsCartPlus />
      </button>
    </section>
  );
};

export default Card;

Card.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

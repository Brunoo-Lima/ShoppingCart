import { useContext } from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import formatCurrency from '../../utilities/formatCurrency';
import { UserContext } from '../../UserContext';

const CartItem = ({ data }) => {
  const { id, thumbnail, price, title } = data;
  const { cartItems, setCartItems } = useContext(UserContext);

  function handleRemoveItem() {
    const updateItems = cartItems.filter((item) => item.id != id);
    setCartItems(updateItems);
  }

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="btn-remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;

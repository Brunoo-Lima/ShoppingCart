import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartBtn.css';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const CartBtn = () => {
  const { cartItems, cartVisible, setCartVisible } = useContext(UserContext);

  return (
    <button
      className="btnCart"
      type="button"
      onClick={() => setCartVisible(!cartVisible)}
    >
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && (
        <span className="btnCartStatus">{cartItems.length}</span>
      )}
    </button>
  );
};
export default CartBtn;

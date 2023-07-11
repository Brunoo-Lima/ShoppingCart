import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartBtn.css';

const CartBtn = () => {
  return (
    <button className="btnCart" type="button">
      <AiOutlineShoppingCart />
      <span className="btnCartStatus">1</span>
    </button>
  );
};
export default CartBtn;

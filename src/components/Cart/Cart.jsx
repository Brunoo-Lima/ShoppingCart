import './Cart.css';
import formatCurrency from '../../utilities/formatCurrency';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems } = useContext(UserContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className="cart cart-active">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
};

export default Cart;

import { createContext, useState } from 'react';

export const UserContext = createContext();

export const AppContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    cartVisible,
    setCartVisible,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

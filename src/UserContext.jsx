import { createContext, useState } from 'react';

export const UserContext = createContext();

export const AppContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = {
    products,
    setProducts,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

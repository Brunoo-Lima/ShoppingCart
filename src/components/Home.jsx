import { useContext, useEffect } from 'react';
import Card from './Card/Card';
import Api from '../Api';
import './Home.css';
import { UserContext } from '../UserContext';

const Home = () => {
  const { products, setProducts } = useContext(UserContext);

  useEffect(() => {
    Api('notebook').then((response) => {
      setProducts(response);
    });
  }, [setProducts]);

  return (
    <section className="container products">
      {products.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </section>
  );
};

export default Home;

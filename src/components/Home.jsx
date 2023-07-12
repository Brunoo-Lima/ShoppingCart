import { useEffect, useState } from 'react';
import Card from './Card/Card';
import Api from './Api';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api('notebook').then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <section className="container products">
      {products.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </section>
  );
};

export default Home;

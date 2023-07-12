import { useEffect, useState } from 'react';
import Card from './Card/Card';
import Api from './Api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api('computador').then((response) => {
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

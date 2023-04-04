import React, { FC, useEffect, useState } from 'react';
import { Layout } from '../../ui/layout/Layout';
import PreLoader from '../../ui/preloader/PreLoader';
import Card from './card/Card';
import scss from './Home.module.scss';

const Home: FC = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products?limit=0&skip=0')
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data.products);
      });
  }, []);

  console.log('📌:', products);

  return (
    <Layout>
      {isLoading ? (
        <PreLoader />
      ) : (
        <nav className={scss.wrapper} data-testid="home-page">
          {products &&
            products.map(({ id, title, description, thumbnail, price, rating }) => (
              <Card
                key={id}
                id={id}
                name={title}
                description={description}
                poster={thumbnail}
                like={price}
                view={rating}
              />
            ))}
        </nav>
      )}
    </Layout>
  );
};

export default Home;

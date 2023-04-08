import React, { FC, useEffect, useState } from 'react';
import { Layout } from '../../ui/layout/Layout';
import PreLoader from '../../ui/preloader/PreLoader';
import Card from './card/Card';
import scss from './Home.module.scss';
import Modal, { ICardModal } from '../../ui/modal/Modal';
import { HomeContext } from '../../../context';

const Home: FC = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCard, setIsLoadingCard] = useState(false);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [cardProduct, setCardProduct] = useState<ICardModal | undefined>();

  useEffect(() => {
    if (!products.length && !localStorage.getItem('search')) {
      setIsLoading(true);
      fetch('https://dummyjson.com/products?limit=0&skip=0')
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setProducts(data.products);
        });
    }
  }, []);

  const showHandle = (id: number) => {
    setIsLoadingCard(true);
    setModalActive(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingCard(false);
        setCardProduct(data);
      });
  };

  const foundHandler = (value: string) => {
    setIsLoadingCard(true);
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingCard(false);
        setProducts(data.products);
      });
  };

  return (
    <HomeContext.Provider value={{ foundHandler }}>
      <div data-testid="home-page">
        <Modal
          active={modalActive}
          setActive={setModalActive}
          cardProduct={cardProduct}
          isLoading={isLoadingCard}
        />
        <Layout>
          {isLoading || isLoadingCard ? (
            <PreLoader />
          ) : products.length ? (
            <nav className={scss.wrapper}>
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
                    showHandle={showHandle}
                  />
                ))}
            </nav>
          ) : isLoadingCard ? (
            <PreLoader />
          ) : (
            <div className={scss.errorFound}>Products not found</div>
          )}
        </Layout>
      </div>
    </HomeContext.Provider>
  );
};

export default Home;

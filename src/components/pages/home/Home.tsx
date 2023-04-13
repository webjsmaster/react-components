import React, { FC, useEffect, useState } from 'react';
import { Layout } from '../../ui/layout/Layout';
import PreLoader from '../../ui/preloader/PreLoader';
import Card from './card/Card';
import scss from './Home.module.scss';
import Modal, { ICardModal } from '../../ui/modal/Modal';
import { HomeContext } from '../../../context';
import { useActions, useAppSelector } from '../../../hooks/redux';
import { productsApi } from '../../../store/api/products.api';

const Home: FC = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCard, setIsLoadingCard] = useState(false);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [cardProduct, setCardProduct] = useState<ICardModal | undefined>();

  const { products: test } = useAppSelector((state) => state.productReducer);

  const { addProducts } = useActions();

  const { data: all, isLoading: loading } = productsApi.useGetAllProductsQuery('');
  const { data: one } = productsApi.useGetOneProductQuery('');

  console.log('📌:DATA', all, loading);
  console.log('📌:ONE', one, loading);

  useEffect(() => {
    if (!products.length && !localStorage.getItem('search')) {
      setIsLoading(true);
      fetch('https://dummyjson.com/products?limit=0&skip=0')
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setProducts(data.products);
          addProducts(data.products);
        });
    }
    /* eslint-disable */
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
    console.log('📌:SEARCH');
    setIsLoadingCard(true);
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingCard(false);
        setProducts(data.products);
      });
  };

  console.log('📌:product', test);

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

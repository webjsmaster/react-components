import React, { FC, useEffect, useState } from 'react';
import { Layout } from '../../ui/layout/Layout';
import PreLoader from '../../ui/preloader/PreLoader';
import Card from './card/Card';
import scss from './Home.module.scss';
import { HomeContext } from '../../../context';
import { productsApi } from '../../../store/api/products.api';
import Modal from '../../ui/modal/Modal';
import { IProduct } from '../../../types/store';

const Home: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [id, setId] = useState<number>(1);
  const [products, setProducts] = useState<IProduct[]>();

  const {
    data: dataAllProducts,
    isLoading: isLoadingAllProducts,
    error: errorAllProducts,
  } = productsApi.useGetAllProductsQuery({
    limit: 0,
    skip: 0,
  });

  const [trigger, { data, isLoading, error }] = productsApi.useLazySearchProductQuery();

  useEffect(() => {
    if (dataAllProducts?.products) {
      setProducts(dataAllProducts.products);
    }
  }, [dataAllProducts?.products]);

  const showHandle = (id: number) => {
    setId(id);
    setModalActive(true);
  };

  const foundHandler = (value: string) => {
    trigger(value);
  };
  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  console.log('💫:DATA', data);

  return (
    <HomeContext.Provider value={{ foundHandler }}>
      <div data-testid="home-page">
        <Modal active={modalActive} setActive={setModalActive} id={id} />
        <Layout>
          {isLoadingAllProducts ? (
            <PreLoader />
          ) : dataAllProducts ? (
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
          ) : (
            <div className={scss.errorFound}>
              {!errorAllProducts ? 'Products not found' : 'The request failed'}
            </div>
          )}
        </Layout>
      </div>
    </HomeContext.Provider>
  );
};

export default Home;

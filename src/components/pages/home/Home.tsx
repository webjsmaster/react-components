import React, { FC, useEffect, useState } from 'react';
import { Layout } from '../../ui/layout/Layout';
import PreLoader from '../../ui/preloader/PreLoader';
import Card from './card/Card';
import scss from './Home.module.scss';
import { productsApi } from '../../../store/api/products.api';
import Modal from '../../ui/modal/Modal';
import { IProduct } from '../../../types/store';
import { useAppSelector } from '../../../hooks/redux';

const Home: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [id, setId] = useState<number>(1);
  const [products, setProducts] = useState<IProduct[]>();

  const { inputValue } = useAppSelector((state) => state.cardReducer);

  const {
    data: dataAllProducts,
    isLoading: isLoadingAllProducts,
    error: errorAllProducts,
  } = productsApi.useGetAllProductsQuery({
    limit: 0,
    skip: 0,
  });

  const [
    trigger,
    {
      data: dataSearchProducts,
      isFetching: isFetchingSearchProducts,
      error: errorSearchProducts,
      isLoading,
    },
  ] = productsApi.useLazySearchProductQuery();

  useEffect(() => {
    if (dataAllProducts && !dataSearchProducts) {
      setProducts(dataAllProducts.products);
    }
  }, [dataAllProducts, dataSearchProducts]);

  const showHandle = (id: number) => {
    setId(id);
    setModalActive(true);
  };

  useEffect(() => {
    if (inputValue) {
      setProducts([]);
      trigger({ q: inputValue, skip: 0, limit: 0 }).then(({ data }) => setProducts(data?.products));
    } else {
      setProducts(dataAllProducts?.products);
    }
  }, [inputValue]);

  return (
    <div data-testid='home-page'>
      <Modal active={modalActive} setActive={setModalActive} id={id} />
      <Layout>
        {isLoadingAllProducts || isFetchingSearchProducts || isLoading ? (
          <PreLoader />
        ) : products?.length ? (
          <nav className={scss.wrapper}>
            {products &&
              products.map(({ id, title, description, thumbnail, price, rating }) => (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  thumbnail={thumbnail}
                  price={price}
                  rating={rating}
                  showHandle={showHandle}
                />
              ))}
          </nav>
        ) : (
          <div className={scss.errorFound}>
            {!(errorAllProducts || errorSearchProducts)
              ? 'Products not found'
              : 'The request failed'}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Home;

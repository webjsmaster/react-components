import React, { FC, useState } from 'react';
import { Layout } from '../../ui/layout/Layout';
import PreLoader from '../../ui/preloader/PreLoader';
import Card from './card/Card';
import scss from './Home.module.scss';
import { HomeContext } from '../../../context';
import { productsApi } from '../../../store/api/products.api';
import Modal from '../../ui/modal/Modal';
import { useDispatch } from 'react-redux';

const Home: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

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
    { data: dataOneProduct, isLoading: isLoadingOneProducts, error: errorOneProduct },
  ] = productsApi.useLazyGetOneProductQuery();

  console.log('📌:', dataOneProduct, isLoadingOneProducts);

  const dispatch = useDispatch();

  const showHandle = (id: number) => {
    dispatch(productsApi.util.invalidateTags(['Products']));
    setModalActive(true);
    trigger(id);
  };

  const foundHandler = (value: string) => {
    // console.log('📌:SEARCH');
    // setIsLoadingCard(true);
    // fetch(`https://dummyjson.com/products/search?q=${value}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setIsLoadingCard(false);
    //     setProducts(data.products);
    //   });
  };

  console.log('💫:ERROR', errorOneProduct, errorAllProducts);

  return (
    <HomeContext.Provider value={{ foundHandler }}>
      <div data-testid="home-page">
        <Modal
          active={modalActive}
          setActive={setModalActive}
          isLoading={isLoadingOneProducts}
          cardProduct={dataOneProduct}
          error={errorOneProduct}
        />
        <Layout>
          {isLoadingAllProducts ? (
            <PreLoader />
          ) : dataAllProducts ? (
            <nav className={scss.wrapper}>
              {dataAllProducts.products &&
                dataAllProducts.products.map(
                  ({ id, title, description, thumbnail, price, rating }) => (
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
                  )
                )}
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

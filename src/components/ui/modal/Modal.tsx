import React, { Dispatch, FC, SetStateAction } from 'react';
import scss from './Modal.module.scss';
import cn from 'classnames';
import CardModal from './CardModal/CardModal';
import { productsApi } from '../../../store/api/products.api';

interface IModal {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  id: number;
}

export interface ICardModal {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: [string];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

const Modal: FC<IModal> = ({ active, setActive, id }) => {
  const { data, isLoading, error } = productsApi.useGetOneProductQuery(id);

  return (
    <div
      className={active ? cn(scss.modal, scss.active) : scss.modal}
      onClick={() => setActive(false)}
    >
      <div className={scss.content} onClick={(e) => e.stopPropagation()}>
        {isLoading || data?.id !== id ? (
          'Loading...'
        ) : !error ? (
          <CardModal card={data} setActive={() => setActive(false)} />
        ) : (
          'The request failed'
        )}
      </div>
    </div>
  );
};

export default Modal;

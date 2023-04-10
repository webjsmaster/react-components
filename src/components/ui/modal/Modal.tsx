import React, { Dispatch, FC, SetStateAction } from 'react';
import scss from './Modal.module.scss';
import cn from 'classnames';
import CardModal from './CardModal/CardModal';

interface IModal {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  cardProduct: ICardModal | undefined;
  isLoading: boolean;
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

const Modal: FC<IModal> = ({ active, setActive, cardProduct, isLoading }) => {
  return (
    <div
      className={active ? cn(scss.modal, scss.active) : scss.modal}
      onClick={() => setActive(false)}
    >
      <div className={scss.content} onClick={(e) => e.stopPropagation()}>
        {isLoading ? 'Loading...' : <CardModal card={cardProduct} setActive={setActive} />}
      </div>
    </div>
  );
};

export default Modal;

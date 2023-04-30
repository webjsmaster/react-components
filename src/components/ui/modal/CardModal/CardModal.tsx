import React, { Dispatch, FC, SetStateAction } from 'react';
import { ICardModal } from '../Modal';
import scss from './CardModal.module.scss';

interface ICardModalProps {
  card: ICardModal | undefined;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const CardModal: FC<ICardModalProps> = ({ card, setActive }) => {
  return (
    <div className={scss.wrapper} data-testid="card-modal">
      <div className={scss.titleWrapper}>
        <div className={scss.title}>{card?.title}</div>
        <div className={scss.percent}>{card?.discountPercentage} $</div>
        <div className={scss.btn}>
          <button onClick={() => setActive(false)}></button>
        </div>
      </div>
      <div className={scss.body}>
        <div className={scss.img}>
          <img src={card?.thumbnail} alt="" />
        </div>
        <div className={scss.description}>
          <div>
            <div className={scss.brand}>{card?.brand}</div>
            <div className={scss.category}>{card?.category}</div>
          </div>
          <div className={scss.des}>{card?.description}</div>
          <div className={scss.footer}>
            <div className={scss.price}>Price: {card?.price} $</div>
            <div className={scss.rating}>Rate: {card?.rating}</div>
            <div className={scss.stock}>Stock: {card?.stock}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

import React from 'react';
import scss from './Card.module.scss';
import like from '../../../../image/like.svg';
import view from './../../../../image/view.svg';

export interface ICardHome {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
}

export interface ICardHomeProps extends ICardHome {
  showHandle: (param: number) => void;
}

function Card(props: ICardHomeProps) {
  const { id, showHandle } = props;
  return (
    <div className={scss.body} onClick={() => showHandle(id)} data-testid="card-home">
      <h3 className={scss.name}>{props.title}</h3>
      <div className={scss.poster}>
        <img src={props.thumbnail} alt="" />
      </div>
      <div className={scss.footer}>
        <div className={scss.like}>
          <div>{props.price}</div>
          <div className="mr-2">
            <img src={like} alt="" className={scss.icon} />
          </div>
        </div>
        <div className={scss.like}>
          <div className="mr-2">{props.rating}</div>
          <div>
            <img src={view} alt="" className={scss.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

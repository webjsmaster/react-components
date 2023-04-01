import React from 'react';
import scss from './Card.module.scss';
import like from '../../../../image/like.svg';
import view from './../../../../image/view.svg';
import { ICard } from '../../../../utils/mockData';

function Card(props: ICard) {
  return (
    <div className={scss.body}>
      <div className={scss.name}>{props.name}</div>
      <div className={scss.poster}>
        <img src={props.poster} alt="" />
      </div>
      <div className={scss.des}>{props.description}</div>
      <div className={scss.footer}>
        <div className={scss.like}>
          <div>{props.like}</div>
          <div className="mr-2">
            <img src={like} alt="" className={scss.icon} />
          </div>
        </div>
        <div className={scss.like}>
          <div className="mr-2">{props.view}</div>
          <div>
            <img src={view} alt="" className={scss.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

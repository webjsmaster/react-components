import React from 'react';
import scss from './Card.module.scss';
import like from '../../../../image/like.svg';
import view from './../../../../image/view.svg';

export interface ICardHome {
  id: number;
  name: string;
  description: string;
  poster: string;
  like: number;
  view: number;
}

export interface ICardHomeProps extends ICardHome {
  showHandle: (param: number) => void;
}

function Card(props: ICardHomeProps) {
  const { id, showHandle } = props;
  return (
    <div className={scss.body} onClick={() => showHandle(id)}>
      <div className={scss.name}>{props.name}</div>
      <div className={scss.poster}>
        <img src={props.poster} alt="" />
      </div>
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

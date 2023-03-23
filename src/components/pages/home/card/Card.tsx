import React, { Component } from 'react';
import scss from './Card.module.scss';
import like from '../../../../image/like.svg';
import view from './../../../../image/view.svg';
import { ICard } from '../../../../utils/mockData';

class Card extends Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    return (
      <div className={scss.body}>
        <div className={scss.name}>{this.props.name}</div>
        <div className={scss.poster}>
          <img src={this.props.poster} alt="" />
        </div>
        <div className={scss.des}>{this.props.description}</div>
        <div className={scss.footer}>
          <div className={scss.like}>
            <div>{this.props.like}</div>
            <div className="mr-2">
              <img src={like} alt="" className={scss.icon} />
            </div>
          </div>
          <div className={scss.like}>
            <div className="mr-2">{this.props.view}</div>
            <div>
              <img src={view} alt="" className={scss.icon} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

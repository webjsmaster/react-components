import React, { FC } from 'react';
import scss from './Home.module.scss';
import { cards, ICard } from '../../../utils/mockData';
import like from './../../../image/like.svg';
import { LayoutCC } from '../../ui/layout/LayoutCC';

const Home: FC = () => {
  return (
    <LayoutCC>
      <nav className={scss.wrapper}>
        {cards.map((t: ICard) => (
          <div key={t.id} className={scss.body}>
            <div className={scss.name}>{t.name}</div>
            <div className={scss.poster}>
              <img src={t.poster} alt="" />
            </div>
            <div className={scss.des}>{t.description}</div>
            <div className={scss.like}>
              <div>{t.like}</div>
              <div>
                <img src={like} alt="" className={scss.icon} />
              </div>
            </div>
          </div>
        ))}
      </nav>
    </LayoutCC>
  );
};

export default Home;

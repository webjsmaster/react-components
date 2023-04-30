import React, { FC } from 'react';
import { ICard } from 'types/form.interface';
import scss from './CardFormBlock.module.scss';
import cn from 'classnames';

const CardFormBlock: FC<{ cards: ICard[] }> = ({ cards }) => {
  return (
    <div className={scss.cardBlock}>
      {cards &&
        cards.map((card: ICard) => (
          <div key={card.id} className={cn(scss.wrapper, scss[card.select])}>
            <div className={scss.textBlock}>
              <div className={scss.name}>{card.firstText}</div>
              <div className={scss.name}>{card.secondText}</div>
            </div>
            <div className={scss.image}>
              <img src={card.img} alt={card.firstText} />
            </div>
            <div className={scss.check}>
              <div
                className={card.checkbox ? cn(scss.checkbox, scss.checkboxActive) : scss.checkbox}
              >
                Checkbox true
              </div>
              <div
                className={card.radio === 'first' ? cn(scss.radio, scss.radioActive) : scss.radio}
              >
                {card.radio.charAt(0).toUpperCase() + card.radio.slice(1)}
              </div>
            </div>
            <div className={scss.date}>{card.date}</div>
          </div>
        ))}
    </div>
  );
};

export default CardFormBlock;

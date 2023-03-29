import React from 'react';
import { ICardForm } from 'types/form.interface';
import scss from './CardFormBlock.module.scss';
import cn from 'classnames';

function CardFormBlock(props: { cards: ICardForm[] }) {
  return (
    <div className={scss.cardBlock}>
      {props.cards &&
        props.cards.map((card: ICardForm) => (
          <div key={card.text} className={cn(scss.wrapper, scss[card.select])}>
            <div className={scss.name}>{card.text}</div>
            <div className={scss.image}>
              <img src={card.image} alt={card.text} />
            </div>
            <div className={scss.check}>
              <div
                className={card.checkbox ? cn(scss.checkbox, scss.checkboxActive) : scss.checkbox}
              >
                Checkbox
              </div>
              <div className={card.radio ? cn(scss.radio, scss.radioActive) : scss.radio}>
                Radio
              </div>
            </div>
            <div className={scss.date}>{card.date}</div>
          </div>
        ))}
    </div>
  );
}

export default CardFormBlock;

import React, { Component } from 'react';
import { ICardForm } from 'types/stateType';
import scss from './CardForm.module.scss';
import cn from 'classnames';

class CardForm extends Component<ICardForm> {
  render() {
    const { props } = this.props;
    console.log('📌:', props);

    return (
      <div className={cn(scss.wrapper, scss[props.select])}>
        <div className={scss.name}>{props.name}</div>
        <div className={scss.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={scss.check}>
          <div className={props.checkbox ? cn(scss.checkbox, scss.checkboxActive) : scss.checkbox}>
            Checkbox
          </div>
          <div className={props.radio ? cn(scss.radio, scss.radioActive) : scss.radio}>Radio</div>
        </div>
        <div className={scss.date}>{props.date}</div>
      </div>
    );
  }
}

export default CardForm;

import React, { Component, PropsWithChildren } from 'react';
import scss from './Button.module.scss';

interface IButton extends PropsWithChildren {
  type: 'submit' | 'button';
  onClick?: () => void;
}

class Button extends Component<IButton> {
  render() {
    const { children, ...rest } = this.props;
    return (
      <button className={scss.button} {...rest}>
        {children}
      </button>
    );
  }
}

export default Button;

import React, { PropsWithChildren } from 'react';
import scss from './Button.module.scss';

interface IButton extends PropsWithChildren {
  type: 'submit' | 'button';
  onClick?: () => void;
}

function Button(props: IButton) {
  const { children, ...rest } = props;
  return (
    <button className={scss.button} {...rest}>
      {children}
    </button>
  );
}

export default Button;

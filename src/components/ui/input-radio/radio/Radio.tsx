import React, { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import cn from 'classnames';
import scss from './Radio.module.scss';

interface IRadio extends PropsWithChildren {
  selected: 'first' | 'second';
  onChange: Dispatch<SetStateAction<'first' | 'second'>>;
  value: 'first' | 'second';
}

const Radio: FC<IRadio> = (props) => {
  const { selected, onChange, children, value } = props;
  return (
    <div
      className={scss.wrapper}
      onClick={() => {
        onChange(value);
      }}
    >
      <div className={cn(scss.outerCircle, value !== selected && scss.unselected)}>
        <div className={cn(scss.innerCircle, value !== selected && scss.unselectedCircle)} />
      </div>
      <div className={scss.text}>{children}</div>
    </div>
  );
};

export default Radio;

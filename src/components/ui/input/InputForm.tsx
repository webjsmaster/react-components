import React, { Component, PropsWithChildren } from 'react';
import scss from './InputForm.module.scss';

interface Props extends PropsWithChildren {
  reference: React.RefObject<HTMLInputElement>;
  type: string;
  className?: string;
}

class InputForm extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { reference, children, ...rest } = this.props;
    return (
      <label className={scss.label}>
        {children}
        <input {...rest} ref={reference} />
      </label>
    );
  }
}

export default InputForm;

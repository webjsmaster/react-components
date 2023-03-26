import React, { Component, PropsWithChildren } from 'react';
import scss from './InputForm.module.scss';
import { IValidation } from '../../../types/stateType';
import { genMessage } from '../../../utils/genMessage';
import cn from 'classnames';

interface Props extends PropsWithChildren {
  reference: React.RefObject<HTMLInputElement>;
  type: string;
  className?: string;
  validation: IValidation;
}

class InputForm extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { reference, validation, children, ...rest } = this.props;
    let resultValidation = true;
    for (const key in validation as IValidation) {
      key === reference.current?.type
        ? (resultValidation = validation[key as keyof typeof validation])
        : true;
    }

    let message = '';

    if (reference.current?.type && !resultValidation) {
      message = genMessage(reference.current?.type);
    }

    console.log('📌:', validation);

    return (
      <label className={resultValidation ? scss.label : cn(scss.label, scss.labelError)}>
        {children}
        <input {...rest} ref={reference} />
        <div className={scss.errorMessage}>{message}</div>
      </label>
    );
  }
}

export default InputForm;

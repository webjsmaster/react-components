import React, { FC, PropsWithChildren } from 'react';
import Radio from './radio/Radio';
import { Control, Controller, FieldError } from 'react-hook-form';
import { IFieldData } from '../../../types/form.interface';
import scss from './RadioField.module.scss';

interface IRadioField extends PropsWithChildren {
  control: Control<IFieldData>;
  error: FieldError | undefined;
}

const RadioField: FC<IRadioField> = ({ error, control, children }) => {
  return (
    <div className={scss.wrapper}>
      {children}
      <Controller
        control={control}
        name="radio"
        rules={{ required: 'Radio is required field' }}
        render={({ field: { onChange, value } }) => (
          <div className={scss.radio}>
            <Radio value="first" selected={value} onChange={onChange}>
              First
            </Radio>
            <Radio value="second" selected={value} onChange={onChange}>
              Second
            </Radio>
          </div>
        )}
      />
      {error && <div className={scss.errorMessage}>{error.message}</div>}
    </div>
  );
};

export default RadioField;

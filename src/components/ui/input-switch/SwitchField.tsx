import React, { FC, PropsWithChildren } from 'react';
import scss from './SwitchField.module.scss';
import cn from 'classnames';
import { Control, Controller, FieldError } from 'react-hook-form';
import { IFieldData } from '../../../types/form.interface';

interface ISwitch extends PropsWithChildren {
  control: Control<IFieldData>;
  error: FieldError | undefined;
}

const SwitchField: FC<ISwitch> = ({ control, children, error }) => {
  return (
    <div className={scss.wrapper}>
      {children}
      <Controller
        control={control}
        name="checkbox"
        defaultValue={false}
        rules={{ required: 'Checkbox is required field' }}
        render={({ field: { onChange, value } }) => (
          <>
            <input
              id="switch"
              className={scss.checkbox}
              type="checkbox"
              checked={value}
              onChange={onChange}
            />
            <label
              className={value ? cn(scss.label, 'bg-green-700') : cn(scss.label, 'bg-red-500')}
              htmlFor={`switch`}
            >
              <span className={scss.button} />
            </label>
          </>
        )}
      />
      {error && <div className={scss.errorMessage}>{error.message}</div>}
    </div>
  );
};

export default SwitchField;

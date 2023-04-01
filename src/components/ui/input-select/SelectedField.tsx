import Select from 'react-select';
import React, { FC } from 'react';
import './CustomSelect.scss';
import cn from 'classnames';
import { ISelectedField } from '../../../types/form.interface';
import { IOption } from '../../../utils/consts';
import { Controller } from 'react-hook-form';
import scss from './SelectedField.module.scss';

const SelectedField: FC<ISelectedField> = ({ options, control, children, error }) => {
  const getValue = (value: string) =>
    value
      ? options.find((option: IOption) => option.value == value)
      : { label: 'Select color...', value: '' };

  return (
    <div className={scss.wrapper}>
      {children}
      <Controller
        control={control}
        name="select"
        rules={{ required: 'Select is required field' }}
        render={({ field: { onChange, value } }) => (
          <Select
            value={getValue(value)}
            onChange={(newValue) => onChange((newValue as IOption).value)}
            options={options}
            className={cn('rounded-lg')}
            classNamePrefix={'custom-select-light'}
          />
        )}
      />
      {error && <div className={scss.errorMessage}>{error.message}</div>}
    </div>
  );
};

export default SelectedField;

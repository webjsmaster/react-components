import Select from 'react-select';
import React, { FC } from 'react';
import './CustomSelect.scss';
import cn from 'classnames';
import { ISelectedField } from '../../../types/form.interface';
import { IOption } from '../../../utils/consts';
import { Controller } from 'react-hook-form';

const SelectedField: FC<ISelectedField> = ({ options, className, control }) => {
  const getValue = (value: string) =>
    value
      ? options.find((option: IOption) => option.value == value)
      : { label: 'Select color...', value: '' };

  return (
    <Controller
      control={control}
      name="select"
      rules={{ required: 'Select is required field' }}
      render={({ field: { onChange, value } }) => (
        <Select
          value={getValue(value)}
          onChange={(newValue: IOption) => onChange((newValue as IOption).value)}
          options={options}
          className={cn(className, 'rounded-lg')}
          classNamePrefix={'custom-select-light'}
        />
      )}
    />
  );
};

export default SelectedField;

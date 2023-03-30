import React, { FC, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FieldType, IFieldData, InputType } from '../../../types/form.interface';
import scss from './InputForm.module.scss';

const InputForm: FC<{
  type: FieldType;
  register: UseFormRegister<IFieldData>;
}> = ({ type, register }) => {
  const [inputType, setInputType] = useState<InputType>('text');

  useEffect(() => {
    switch (type) {
      case 'date':
        setInputType('date');
        break;
      case 'file':
        setInputType('file');
        break;
      default:
        setInputType('text');
    }
  }, []);

  return (
    <label className={scss.label}>
      {type === 'name' ? (
        <input
          type={inputType}
          placeholder="Input name"
          {...register(type, {
            required: 'Name is required field',
            minLength: {
              value: 1,
              message: 'Min length 3 symbols',
            },
            maxLength: {
              value: 15,
              message: 'Max length 15 symbols',
            },
          })}
        />
      ) : type === 'surname' ? (
        <input
          type={inputType}
          placeholder="Input surname"
          {...register(type, {
            required: 'Surname is required field',
            minLength: {
              value: 1,
              message: 'Min length 1 symbols',
            },
            maxLength: {
              value: 15,
              message: 'Max length 15 symbols',
            },
          })}
        />
      ) : (
        <input
          type={inputType}
          {...register(type, {
            required: 'Date is required field',
          })}
        />
      )}
    </label>
  );
};

export default InputForm;

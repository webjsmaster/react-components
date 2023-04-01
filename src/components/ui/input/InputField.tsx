import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { FieldType, IFieldData, InputType } from '../../../types/form.interface';
import scss from './InputField.module.scss';

interface IInputFile extends PropsWithChildren {
  type: FieldType;
  register: UseFormRegister<IFieldData>;
  error: FieldError | undefined;
}

const InputField: FC<IInputFile> = ({ type, register, children, error }) => {
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
  }, [type]);

  return (
    <label className={scss.label}>
      {children}
      {type === 'firstText' ? (
        <input
          type={inputType}
          placeholder="Input text"
          {...register(type, {
            required: `${type} is required field`,
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
      ) : type === 'secondText' ? (
        <input
          type={inputType}
          placeholder="Input text"
          {...register(type, {
            required: `${type} is required field`,
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
      ) : type === 'file' ? (
        <input
          type={inputType}
          {...register(type, {
            validate: {
              empty: (v) => v.length > 0 || `${type} is required field`,
              type: (v) => (v.length > 0 && v[0].type.startsWith('image')) || 'Should be a image',
            },
          })}
        />
      ) : (
        <input
          type={inputType}
          {...register(type, {
            required: `${type} is required field`,
          })}
        />
      )}
      {error && <div className={scss.errorMessage}>{error.message}</div>}
    </label>
  );
};

export default InputField;

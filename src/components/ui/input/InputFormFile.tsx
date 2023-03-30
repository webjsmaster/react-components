import React, { ChangeEvent, FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFieldData } from '../../../types/form.interface';
import scss from './InputForm.module.scss';

const InputFormFile: FC<{
  register: UseFormRegister<IFieldData>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ register, onChange }) => {
  return (
    <label className={scss.label}>
      <input
        type="file"
        placeholder="Input File"
        {...register('file', {
          required: 'File is required field',
        })}
        onChange={(e) => onChange(e)}
      />
    </label>
  );
};

export default InputFormFile;

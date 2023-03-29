import React, { FC } from 'react';

const InputFormNew: FC<{ type: string; register: any }> = (props) => {
  return (
    <label>
      <input
        type="text"
        placeholder="Input text"
        {...props.register('text', {
          required: 'Name is required field',
          minLength: {
            value: 3,
            message: 'Min length 3 symbols',
          },
          maxLength: {
            value: 15,
            message: 'Max length 15 symbols',
          },
        })}
      />
    </label>
  );
};

export default InputFormNew;

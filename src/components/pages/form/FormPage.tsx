import React, { FC } from 'react';
import { Layout } from '../../ui/layout/Layout';
import scss from './FormPage.module.scss';
import Button from '../../ui/button/Button';
import CardFormBlock from '../../ui/card-form-block/CardFormBlock';
import { ICardForm, IFieldData, IFieldType } from '../../../types/form.interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputFormNew from '../../ui/input/InputFormNew';

const cards: ICardForm[] = [
  {
    id: '1',
    text: 'test',
    select: 'green',
    date: '2023-23-56',
    checkbox: true,
    image: 'https://supremelearning.ru/wp-content/uploads/2020/01/test-scaled.jpg',
    radio: true,
  },
];

const inputs: IFieldType[] = [
  {
    field: 'name',
    type: 'text',
  },
  {
    field: 'date',
    type: 'date',
  },
];

const FormPage: FC = () => {
  // let message = '';
  // const validationSelect = state.validation.select;
  // if (!state.validation.select) {
  //   message = genMessage('select');
  // }

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IFieldData>();

  const onSubmit: SubmitHandler<IFieldData> = (data: IFieldData) => {
    console.log('🌴:DATA', data);
    reset();
  };

  const handleReset = () => {
    reset();
  };

  console.log('📌:ERRORS', errors);

  return (
    <Layout>
      <div className={scss.wrapper} data-testid="form-page">
        <div className={scss.content}>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Input text"
              {...register('name', {
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
            <InputFormNew type={'surname'} register={register} />
            <InputFormNew type={'date'} register={register} />

            {/*{inputField.map((field) => (*/}
            {/*  <InputForm*/}
            {/*    key={field.type}*/}
            {/*    type={field.type}*/}
            {/*    reference={*/}
            {/*      field.type === "input"*/}
            {/*        ? nameRef*/}
            {/*        : field.type === "date"*/}
            {/*          ? dateRef*/}
            {/*          : field.type === "checkbox"*/}
            {/*            ? checkRef*/}
            {/*            : field.type === "radio"*/}
            {/*              ? radioRef*/}
            {/*              : fileRef*/}
            {/*    }*/}
            {/*    className={*/}
            {/*      state.validation[field.type]*/}
            {/*        ? scss[field.type]*/}
            {/*        : cn(scss[field.type], scss.error)*/}
            {/*    }*/}
            {/*    validation={state.validation}*/}
            {/*  >*/}
            {/*    {field.label}*/}
            {/*  </InputForm>*/}
            {/*))}*/}

            {/*<div className={scss.selectBlock}>*/}
            {/*  <label htmlFor="select">Border Color</label>*/}
            {/*  <select*/}
            {/*    name="select"*/}
            {/*    id="select"*/}
            {/*    ref={selectRef}*/}
            {/*    className={!validationSelect ? 'border-2 border-red-500' : ''}*/}
            {/*  >*/}
            {/*    <option></option>*/}
            {/*    {options.map((option: IOption) => (*/}
            {/*      <option value={option.value} key={option.value}>*/}
            {/*        {option.title}*/}
            {/*      </option>*/}
            {/*    ))}*/}
            {/*  </select>*/}
            {/*<div className={scss.errorMessage}>{message}</div>*/}
            {/*</div>*/}
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={handleReset}>
              Reset
            </Button>
          </form>
        </div>
      </div>
      <CardFormBlock cards={cards} />
    </Layout>
  );
};

export default FormPage;

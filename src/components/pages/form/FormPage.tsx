import React, { ChangeEvent, FC, useState } from 'react';
import { Layout } from '../../ui/layout/Layout';
import scss from './FormPage.module.scss';
import Button from '../../ui/button/Button';
import CardFormBlock from '../../ui/card-form-block/CardFormBlock';
import { ICardForm, IFieldData, IFieldType } from '../../../types/form.interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputForm from '../../ui/input/InputForm';
import InputFormFile from '../../ui/input/InputFormFile';
import SelectedField from '../../ui/input-select/SelectedField';
import { options } from '../../../utils/consts';

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
  const [image, setImage] = useState<string>('');

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<IFieldData>();

  const onSubmit: SubmitHandler<IFieldData> = (data: IFieldData) => {
    console.log('🌴:DATA', data);
    reset();
  };

  const handleReset = () => {
    reset();
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(URL.createObjectURL(file as Blob));
  };

  const onChangeSelect = () => {
    console.log('📌:');
  };

  const handleFillData = () => {
    const mockFile = new File(['test'], 'test.png', { type: 'image/png' });
    const file = URL.createObjectURL(mockFile as Blob);
    setValue('name', 'Ivan');
    setValue('surname', 'Ivanov');
    setValue('date', '2023-03-30');
    setValue('select', 'green');
    setValue('file', file);
  };

  console.log('📌:ERRORS', errors);

  return (
    <Layout>
      <div className={scss.wrapper} data-testid="form-page">
        <div className={scss.content}>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <InputForm type={'name'} register={register} />
            <InputForm type={'surname'} register={register} />
            <InputForm type={'date'} register={register} />
            <InputFormFile register={register} onChange={onChangeFile} />
            <SelectedField
              options={options}
              className="rounded-xl"
              onChange={onChangeSelect}
              control={control}
            />
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={handleReset}>
              Reset
            </Button>
            <Button type="button" onClick={handleFillData}>
              Fill Data
            </Button>
          </form>
        </div>
      </div>
      <CardFormBlock cards={cards} />
    </Layout>
  );
};

export default FormPage;

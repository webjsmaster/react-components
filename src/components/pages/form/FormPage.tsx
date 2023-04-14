import React, { FC } from 'react';
import { Layout } from '../../ui/layout/Layout';
import scss from './FormPage.module.scss';
import Button from '../../ui/button/Button';
import CardFormBlock from '../../ui/card-form-block/CardFormBlock';
import { IFieldData } from '../../../types/form.interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../ui/input/InputField';
import SelectedField from '../../ui/input-select/SelectedField';
import { options } from '../../../utils/consts';
import SwitchField from '../../ui/input-switch/SwitchField';
import RadioField from '../../ui/input-radio/RadioField';
import { uuidv4 } from '../../../utils/uuid';
import { useActions, useAppSelector } from '../../../hooks/redux';

const FormPage: FC = () => {
  const { addCard } = useActions();
  const { cards } = useAppSelector((state) => state.cardReducer);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
  } = useForm<IFieldData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IFieldData> = (data: IFieldData) => {
    const image = URL.createObjectURL(data.file[0]);
    addCard({ ...data, id: uuidv4(), img: image });
    reset();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Layout>
      <div className={scss.wrapper} data-testid="form-page">
        <div className={scss.content}>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={scss.formInputBlock}>
              <div className={scss.oneBlockForm}>
                <InputField type={'firstText'} register={register} error={errors.firstText}>
                  Name
                </InputField>
                <InputField type={'secondText'} register={register} error={errors.secondText}>
                  Surname
                </InputField>
                <InputField type={'date'} register={register} error={errors.date}>
                  Input date
                </InputField>
                <InputField type={'file'} register={register} error={errors.file}>
                  Input File
                </InputField>
              </div>
              <div className={scss.twoBlockForm}>
                <RadioField control={control} error={errors.radio}>
                  Radio
                </RadioField>
                <SelectedField options={options} control={control} error={errors.select}>
                  Selected
                </SelectedField>
                <SwitchField control={control} error={errors.checkbox}>
                  Checkbox
                </SwitchField>
              </div>
            </div>
            <div className={scss.buttonBlock}>
              <Button type="submit">Submit</Button>
              <Button type="button" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
      <CardFormBlock cards={cards} />
    </Layout>
  );
};

export default FormPage;

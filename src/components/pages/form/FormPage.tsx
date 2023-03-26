import React, { Component } from 'react';
import { Layout } from '../../ui/layout/Layout';
import scss from './FormPage.module.scss';
import { inputField, IOption, options } from '../../../utils/consts';
import InputForm from '../../ui/input/InputForm';
import { IFormPageProps } from '../../../types/propsType';
import Button from '../../ui/button/Button';
import { ICard } from '../../../types/stateType';
import cn from 'classnames';
import { genMessage } from '../../../utils/genMessage';
import CardForm from '../../ui/card-form/CardForm';

class FormPage extends Component<IFormPageProps> {
  render() {
    const {
      selectRef,
      nameRef,
      dateRef,
      radioRef,
      fileRef,
      checkRef,
      state,
      handleSubmit,
      handleReset,
      formRef,
    } = this.props;

    let message = '';
    const validationSelect = state.validation.select;
    if (!state.validation.select) {
      message = genMessage('select');
    }
    return (
      <Layout>
        <div className={scss.wrapper} data-testid="form-page">
          <div className={scss.content}>
            <form onSubmit={handleSubmit.bind(this)} className={scss.form} ref={formRef}>
              {inputField.map((field) => (
                <InputForm
                  key={field.type}
                  type={field.type}
                  reference={
                    field.type === 'input'
                      ? nameRef
                      : field.type === 'date'
                      ? dateRef
                      : field.type === 'checkbox'
                      ? checkRef
                      : field.type === 'radio'
                      ? radioRef
                      : fileRef
                  }
                  className={
                    state.validation[field.type]
                      ? scss[field.type]
                      : cn(scss[field.type], scss.error)
                  }
                  validation={state.validation}
                >
                  {field.label}
                </InputForm>
              ))}
              <div className={scss.selectBlock}>
                <label htmlFor="select">Border Color</label>
                <select
                  name="select"
                  id="select"
                  ref={selectRef}
                  className={!validationSelect ? 'border-2 border-red-500' : ''}
                >
                  <option></option>
                  {options.map((option: IOption) => (
                    <option value={option.value} key={option.value}>
                      {option.title}
                    </option>
                  ))}
                </select>
                <div className={scss.errorMessage}>{message}</div>
              </div>
              <Button type="submit">Submit</Button>
              <Button type="button" onClick={handleReset}>
                Reset
              </Button>
            </form>
          </div>
        </div>
        <div className={scss.cardBlock}>
          {state.card.map((card: ICard) => (
            <CardForm key={card.name} props={card} />
          ))}
        </div>
      </Layout>
    );
  }
}

export default FormPage;

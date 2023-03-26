import React, { Component, FormEvent } from 'react';
import { FormPage } from '../index';
import { ICard, IStateForm } from '../../../types/stateType';

class FormPageContainer extends Component {
  public inputName: React.RefObject<HTMLInputElement>;
  public inputDate: React.RefObject<HTMLInputElement>;
  public inputCheckbox: React.RefObject<HTMLInputElement>;
  public inputRadio: React.RefObject<HTMLInputElement>;
  public inputFile: React.RefObject<HTMLInputElement>;
  public formRef: React.RefObject<HTMLFormElement>;
  public select: React.RefObject<HTMLSelectElement>;
  public readonly state: IStateForm = {
    name: '',
    date: '',
    course: '',
    student: false,
    work: false,
    image: '',
    card: [],
    validation: {
      text: true,
      date: true,
      file: true,
      select: true,
    },
  };

  constructor(props: never) {
    super(props);

    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.inputCheckbox = React.createRef();
    this.inputRadio = React.createRef();
    this.inputFile = React.createRef();
    this.formRef = React.createRef();
    this.select = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  async handleSubmit(event: FormEvent) {
    event.preventDefault();

    const name = this.inputName.current?.value;
    const date = this.inputDate.current?.value;
    const checkbox = this.inputCheckbox.current?.checked;
    const radio = this.inputRadio.current?.checked;
    const file = this.inputFile.current?.files?.[0];
    const select = this.select.current?.value;

    if (!name || name?.length <= 0 || name?.length > 15) {
      await this.setState({ validation: { ...this.state.validation, text: false } });
    } else {
      await this.setState({ validation: { ...this.state.validation, text: true } });
    }

    if (!date) {
      await this.setState({ validation: { ...this.state.validation, date: false } });
    } else {
      await this.setState({ validation: { ...this.state.validation, date: true } });
    }

    if (!file?.type.match('image')) {
      await this.setState({ validation: { ...this.state.validation, file: false } });
    } else {
      await this.setState({ validation: { ...this.state.validation, file: true } });
    }

    if (!select) {
      await this.setState({ validation: { ...this.state.validation, select: false } });
    } else {
      await this.setState({ validation: { ...this.state.validation, select: true } });
    }

    const { date: dateVal, text: textVal, file: fileVal, select: selVal } = this.state.validation;

    if (name && date && file && select && dateVal && textVal && fileVal && selVal) {
      const image = URL.createObjectURL(file);
      const newCard: ICard = { name, date, image, checkbox, radio, select };
      this.setState({ card: [...this.state.card!, newCard] });
      this.handleReset();
    }
  }

  handleReset() {
    this.formRef.current?.reset();
  }

  render() {
    return (
      <FormPage
        selectRef={this.select}
        formRef={this.formRef}
        handleReset={this.handleReset}
        handleSubmit={this.handleSubmit}
        nameRef={this.inputName}
        dateRef={this.inputDate}
        checkRef={this.inputCheckbox}
        radioRef={this.inputRadio}
        fileRef={this.inputFile}
        state={this.state}
      />
    );
  }
}

export default FormPageContainer;

import React, { ComponentState } from 'react';

export interface IFormPageProps {
  formRef: React.RefObject<HTMLFormElement>;
  nameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  checkRef: React.RefObject<HTMLInputElement>;
  radioRef: React.RefObject<HTMLInputElement>;
  fileRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  state: ComponentState;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleSubmit: Function;
  handleReset: () => void;
}

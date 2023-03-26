export const HOME_ROUTE = '/';
export const ABOUT_ROUTE = '/about';
export const ERROR_ROUTE = '*';
export const FORM_ROUTE = '/form';

export interface IInputField {
  label: string;
  type: 'input' | 'date' | 'checkbox' | 'radio' | 'file';
}

export const inputField: IInputField[] = [
  {
    label: 'Name',
    type: 'input',
  },
  {
    label: 'Date',
    type: 'date',
  },
  {
    label: 'Checkbox',
    type: 'checkbox',
  },
  {
    label: 'Radio',
    type: 'radio',
  },
  {
    label: 'File',
    type: 'file',
  },
];

export interface IOption {
  value: string;
  title: string;
}

export const options: IOption[] = [
  {
    value: 'blue',
    title: 'Blue',
  },
  {
    value: 'green',
    title: 'Green',
  },
  {
    value: 'yellow',
    title: 'Yellow',
  },
];

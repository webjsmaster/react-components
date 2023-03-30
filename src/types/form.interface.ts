// export interface IStateForm {
//   name: string;
//   date: string;
//   student: boolean;
//   work: boolean;
//   image: string;
//   course: string;
//   card?: ICard[];
//   validation: IValidation;
// }

export type FieldType = 'name' | 'surname' | 'date' | 'file';
export type InputType = 'text' | 'date' | 'file';

export interface IFieldType {
  field: FieldType;
  type: InputType;

  // date: string;
  // checkbox: boolean;
  // radio: boolean;
  // image: string;
  // select: string;
}

export interface IFieldData {
  name: string;
  surname: string;
  date: string;
  file: string;
  select: string;
}

export interface ICardForm {
  id: string;
  text: string;
  date: string;
  checkbox: boolean;
  radio: boolean;
  image: string;
  select: string;
}

export interface ISelectedField {
  options: any;
  // value: any;
  className: any;
  control: any;
  onChange: (value: () => void) => void;
}

// export interface IValidation {
//   text: boolean;
//   date: boolean;
//   file: boolean;
//   select: boolean;
// }

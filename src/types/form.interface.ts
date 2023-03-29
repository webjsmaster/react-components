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

export interface IFieldType {
  field: 'name' | 'surname' | 'date';
  type: 'text' | 'date';

  // date: string;
  // checkbox: boolean;
  // radio: boolean;
  // image: string;
  // select: string;
}

export interface IFieldData {
  name: string;
  surname: string;
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

// export interface IValidation {
//   text: boolean;
//   date: boolean;
//   file: boolean;
//   select: boolean;
// }

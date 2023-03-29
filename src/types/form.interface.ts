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

export interface IField {
  text: string;
  date: string;
  checkbox: boolean;
  radio: boolean;
  image: string;
  select: string;
}

export interface ICardForm extends IField {
  id: string;
}

// export interface IValidation {
//   text: boolean;
//   date: boolean;
//   file: boolean;
//   select: boolean;
// }

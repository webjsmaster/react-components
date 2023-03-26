export interface IStateForm {
  name: string;
  date: string;
  student: boolean;
  work: boolean;
  image: string;
  course: string;
  card?: ICard[];
  validation: IValidation;
}

export interface ICard {
  name: string;
  date: string;
  image: string;
  checkbox?: boolean;
  radio?: boolean;
  select: string;
}

export interface ICardForm {
  props: ICard;
}

export interface IValidation {
  text: boolean;
  date: boolean;
  file: boolean;
  select: boolean;
}

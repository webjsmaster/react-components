import { IOption } from '../utils/consts';
import { Control, FieldError } from 'react-hook-form';
import { PropsWithChildren } from 'react';

// export type FieldType = 'firstText' | 'secondText' | 'date' | 'file';
export type FieldType = keyof IFieldData;
export type InputType = 'text' | 'date' | 'file';

export interface IFieldType {
  field: FieldType;
  type: InputType;
}

export interface IFieldData {
  firstText: string;
  secondText: string;
  date: string;
  file?: FileList;
  select: string;
  checkbox: boolean;
  radio: 'first' | 'second';
  img?: string;
}

export interface ICardForm extends IFieldData {
  id: string;
  // firstText: string;
  // secondText: string;
  // date: string;
  // checkbox: boolean;
  // radio: boolean;
  // file: string;
  // select: string;
}

export interface ISelectedField extends PropsWithChildren {
  options: IOption[];
  control: Control<IFieldData>;
  error: FieldError | undefined;
}

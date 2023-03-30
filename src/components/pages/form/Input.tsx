// import React from 'react';
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import { CheckBoxComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
// import '../node_modules/@syncfusion/ej2-base/styles/material.css';
// import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
// import '../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css';
// import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
//
// const Input = ({ value, onChange, type, ...rest }) => {
//   switch (type) {
//     case 'text':
//       return (
//         <TextBoxComponent
//           placeholder={rest?.placeholder}
//           change={({ value }) => onChange(value)}
//           value={value}
//         />
//       );
//     case 'radio':
//       return rest?.options.map((e) => (
//         <RadioButtonComponent
//           key={e}
//           label={e}
//           value={e}
//           onChange={(value) => onChange(value)}
//           checked={value === e}
//         />
//       ));
//     case 'dropdown':
//       return (
//         <DropDownListComponent
//           dataSource={rest?.options}
//           select={({ itemData }) => {
//             onChange(itemData.value);
//           }}
//           value={value}
//         />
//       );
//
//     case 'checkbox':
//       return (
//         <CheckBoxComponent
//           label={rest?.checkboxLabel}
//           onChange={(e) => onChange(e.target.checked)}
//           checked={value}
//         />
//       );
//
//     default:
//       return null;
//   }
// };
//
// export default Input;

export interface IFormDynamicType {
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
  defaultValue: string | boolean;
  rules: {
    required: boolean;
  };
}

export interface IFormDynamic {
  firstName: IFormDynamicType;
  lastName: IFormDynamicType;
  gender: IFormDynamicType;
  profession: IFormDynamicType;
  agree: IFormDynamicType;
  file: IFormDynamicType;
}

// export const dynamicForm: IFormDynamic[] = [
//   firstName: {
//     label: 'First Name',
//     type: 'text',
//     placeholder: 'Enter your first name',
//     defaultValue: '',
//     rules: {
//       required: true,
//     },
//   },
//   lastName: {
//     label: 'Last Name',
//     type: 'text',
//     placeholder: 'Enter your last name',
//     defaultValue: '',
//     rules: {
//       required: true,
//     },
//   },
//   gender: {
//     label: 'Gender',
//     type: 'radio',
//     options: ['male', 'femile'],
//     placeholder: '',
//     defaultValue: '',
//     rules: {
//       required: true,
//     },
//   },
//   profession: {
//     label: 'Profession',
//     type: 'dropdown',
//     options: ['Front-end Developer', 'Back-end Developer', 'Devops Engineer'],
//     defaultValue: '',
//     rules: {
//       required: true,
//     },
//   },
//   agree: {
//     type: 'checkbox',
//     label: 'I hereby agree to the terms.',
//     defaultValue: false,
//     rules: {
//       required: true,
//     },
//   },
//   file: {
//     type: 'file',
//     label: 'Profile Photo',
//     defaultValue: '',
//     rules: {
//       required: true,
//     },
//   },
// ];

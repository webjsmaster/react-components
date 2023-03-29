import { dynamicForm, IFormDynamic } from './Input';
import { Controller } from 'react-hook-form';

export const formInputs = Object.keys(dynamicForm).map((e: IFormDynamic) => {
  const { rules, defaultValue, label } = dynamicForm[e];

  return (
    <section key={e}>
      <label>{label}</label>
      <Controller
        name={e}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <div>
            <Input value={field.value} onChange={field.onChange} {...dynamicForm[e]} />
          </div>
        )}
      />
      {errors[e] && <Error>This field is required</Error>}
    </section>
  );
});

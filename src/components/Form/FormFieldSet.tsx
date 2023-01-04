import {FormHTMLAttributes, ReactNode} from 'react';
import FormInput from '@/components/Form/FormInput';

interface FormFieldSetProps extends FormHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode;
  name: string;
}

function FormFieldSet({children, name, ...rest}: FormFieldSetProps) {
  return (
    <fieldset {...rest} name={name}>
      {children}
    </fieldset>
  );
}

FormFieldSet.Input = FormInput;

export default FormFieldSet;

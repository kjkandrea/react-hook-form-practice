import FormInput from '@/components/forms/Form/FormInput';
import FormButton from '@/components/forms/Form/FormButton';
import {FormHTMLAttributes, ReactNode} from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

function Form({children, ...rest}: FormProps) {
  return <form {...rest}>{children}</form>;
}

Form.Input = FormInput;
Form.Button = FormButton;

export default Form;

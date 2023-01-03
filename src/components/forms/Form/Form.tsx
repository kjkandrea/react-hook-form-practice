import FormInput from '@/components/forms/Form/partials/FormInput';
import FormButton from '@/components/forms/Form/partials/FormButton';
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

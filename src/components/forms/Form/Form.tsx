import FormInput from '@/components/forms/Form/FormInput';
import FormButton from '@/components/forms/Form/FormButton';
import {FormHTMLAttributes, ReactNode} from 'react';
import EmailInput from '@/components/forms/predefined/fields/EmailInput';
import FormFieldSet from '@/components/forms/Form/FormFieldSet';
import RegisterPasswordFieldSet from '@/components/forms/predefined/fieldSets/RegisterPasswordFieldSet';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

function Form({children, ...rest}: FormProps) {
  return <form {...rest}>{children}</form>;
}

Form.Input = FormInput;
Form.Button = FormButton;
Form.FieldSet = FormFieldSet;

Form.EmailInput = EmailInput;
Form.RegisterPasswordFieldSet = RegisterPasswordFieldSet;

export default Form;

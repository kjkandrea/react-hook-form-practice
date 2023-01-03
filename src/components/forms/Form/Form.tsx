import FormInput from '@/components/forms/Form/partials/FormInput';
import FormButton from '@/components/forms/Form/partials/FormButton';
import {ReactNode} from 'react';

interface FormProps {
  children: ReactNode;
}

function Form({children}: FormProps) {
  return <form>{children}</form>;
}

Form.Input = FormInput;
Form.Button = FormButton;

export default Form;

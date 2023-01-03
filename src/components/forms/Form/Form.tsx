import FormInput from '@/components/forms/Form/partials/FormInput';
import {ReactNode} from 'react';

interface FormProps {
  children: ReactNode;
}

function Form({children}: FormProps) {
  return <form>{children}</form>;
}

Form.Input = FormInput;

export default Form;

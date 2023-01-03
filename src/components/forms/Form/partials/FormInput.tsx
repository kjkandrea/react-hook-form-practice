import {HTMLInputTypeAttribute, InputHTMLAttributes} from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: Extract<HTMLInputTypeAttribute, 'text' | 'email' | 'password'>;
  label?: string;
}

export default function FormInput({label, id, ...rest}: FormInputProps) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...rest} />
    </div>
  );
}

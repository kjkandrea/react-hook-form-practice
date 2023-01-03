import {HTMLInputTypeAttribute} from 'react';

interface FormInputProps {
  type: Extract<HTMLInputTypeAttribute, 'text' | 'email' | 'password'>;
  label?: string;
  placeholder?: string;
}

export default function FormInput({label, placeholder, type}: FormInputProps) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

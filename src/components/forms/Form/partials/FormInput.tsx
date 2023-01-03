import {
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  Ref,
} from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: Extract<HTMLInputTypeAttribute, 'text' | 'email' | 'password'>;
  label?: string;
}

const FormInput = forwardRef(
  ({label, id, ...rest}: FormInputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input id={id} ref={ref} {...rest} />
      </div>
    );
  }
);

export default FormInput;

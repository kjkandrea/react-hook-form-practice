import {
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  Ref,
} from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: Extract<HTMLInputTypeAttribute, 'text' | 'email' | 'password'>;
  label?: string;
  helperText?: string;
}

const FormInput = forwardRef(
  (
    {label, id, helperText, ...rest}: FormInputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input id={id} ref={ref} {...rest} />
        {helperText && <p>{helperText}</p>}
      </div>
    );
  }
);

export default FormInput;

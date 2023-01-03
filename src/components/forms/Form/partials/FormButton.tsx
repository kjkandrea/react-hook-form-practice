import {ButtonHTMLAttributes, forwardRef, ReactNode, Ref} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: Extract<
    ButtonHTMLAttributes<HTMLButtonElement>['type'],
    'button' | 'submit'
  >;
  children: ReactNode;
}

const FormButton = forwardRef(
  ({children, ...rest}: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <button {...rest} ref={ref}>
        {children}
      </button>
    );
  }
);

export default FormButton;

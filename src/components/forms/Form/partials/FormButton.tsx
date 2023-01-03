import {ButtonHTMLAttributes, forwardRef, ReactNode, Ref} from 'react';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: Extract<
    ButtonHTMLAttributes<HTMLButtonElement>['type'],
    'button' | 'submit'
  >;
  children: ReactNode;
}

const FormButton = forwardRef(
  ({children, ...rest}: FormButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <button {...rest} ref={ref}>
        {children}
      </button>
    );
  }
);

export default FormButton;

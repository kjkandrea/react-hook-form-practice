import {ButtonHTMLAttributes, ReactNode} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: Extract<
    ButtonHTMLAttributes<HTMLButtonElement>['type'],
    'button' | 'submit'
  >;
  children: ReactNode;
}

export default function FormButton({children, ...rest}: ButtonProps) {
  return <button {...rest}>{children}</button>;
}

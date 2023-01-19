import React, {useRef} from 'react';
import EmailField from '@/components/Form/predefined/fields/HandmadeEmailField';
import PasswordField from '@/components/Form/predefined/fields/HandmadePasswordField';

interface FormField {
  validate: (value: string) => boolean;
  value: string;
}

export type FieldRegister = (
  fieldName: string,
  validate: (value: string) => boolean
) => {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function useForm<FormValues>() {
  const formFieldsRef = useRef<{
    [key: string]: FormField;
  }>({});

  const register: FieldRegister = (fieldName, validate) => {
    const field = {
      validate,
      value: '',
    };
    formFieldsRef.current = {
      ...formFieldsRef.current,
      [fieldName]: field,
    };

    return {
      name: fieldName,
      onChange: e => {
        field.value = e.target.value;
      },
    };
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    next: (result: FormValues) => void
  ) => {
    e.preventDefault();

    const valid = Object.values(formFieldsRef.current).every(
      ({validate, value}) => validate(value)
    );

    if (!valid) return;

    const formValues = Object.entries(formFieldsRef.current).map(
      ([fieldName, {value}]) => [fieldName, value]
    );

    next(Object.fromEntries(formValues));
  };

  return {
    register,
    handleSubmit,
  };
}

export default function HandmadeSignIn() {
  const {handleSubmit, register} = useForm<{
    email: string;
    password: string;
  }>();

  return (
    <form
      onSubmit={e =>
        handleSubmit(e, result => alert(JSON.stringify(result, null, 2)))
      }
      noValidate
    >
      <EmailField register={register} />
      <PasswordField register={register} />
      <input type="submit" value="로그인" />
    </form>
  );
}

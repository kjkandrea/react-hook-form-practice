import regex from '@/const/regex';
import Form from '@/components/forms/Form/Form';
import {useFormContext} from 'react-hook-form';

export interface PasswordValues {
  password: string;
}

interface PasswordInputProps {
  label: string;
}

export default function PasswordInput({label}: PasswordInputProps) {
  const {
    register,
    formState: {errors},
  } = useFormContext<PasswordValues>();

  return (
    <Form.Input
      id="password"
      type="password"
      label={label}
      placeholder="********"
      {...register('password', {
        required: `${label}를 입력하여주세요. 🙏`,
        pattern: {
          value: regex.password,
          message: '숫자, 영문, 특수문자 를 조합하여 입력하여주세요. 🙏',
        },
        minLength: {
          value: 8,
          message: '8자 이상 입력하여 주세요. 🙏',
        },
        maxLength: {
          value: 20,
          message: '20자 이하로 입력하여 주세요. 🙏',
        },
      })}
      helperText={errors.password?.message}
    />
  );
}

import Form from '@/components/forms/Form/Form';
import {useFormContext} from 'react-hook-form';
import regex from '@/const/regex';

export interface RegisterPasswordValues {
  password: string;
  confirmPassword: string;
}

export default function RegisterPasswordFieldSet() {
  const {
    register,
    getValues,
    formState: {errors},
  } = useFormContext<RegisterPasswordValues>();

  return (
    <Form.FieldSet name="register-password">
      <Form.Input
        id="password"
        type="password"
        label="비밀번호"
        placeholder="******"
        {...register('password', {
          required: '비밀번호를 입력하여주세요. 🙏',
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
      <Form.Input
        id="confirm-password"
        type="password"
        label="비밀번호 확인"
        placeholder="******"
        {...register('confirmPassword', {
          validate: value =>
            value === getValues('password') ||
            '비밀번호가 일치하지 않습니다. 😲',
        })}
        helperText={errors.confirmPassword?.message}
      />
    </Form.FieldSet>
  );
}

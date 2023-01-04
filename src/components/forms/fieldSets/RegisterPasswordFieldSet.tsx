import Form from '@/components/forms/Form/Form';
import {RegisterOptions, useFormContext} from 'react-hook-form';
import regex from '@/const/regex';

export interface RegisterPasswordValues {
  password: string;
  confirmPassword: string;
}

const makePasswordRegisterOptions = (fieldName: string): RegisterOptions => ({
  required: `${fieldName} 를 입력하여주세요. 🙏`,
  pattern: {
    value: regex.password,
    message: '숫자, 영문, 특수문자 를 조합하여 입력하여주세요. 🙏',
  },
  minLength: {
    value: 8,
    message: `${fieldName} 를 8자 이상 입력하여 주세요. 🙏`,
  },
  maxLength: {
    value: 20,
    message: `${fieldName} 를 20자 이하로 입력하여 주세요. 🙏`,
  },
});

export default function RegisterPasswordFieldSet() {
  const {
    register,
    formState: {errors},
  } = useFormContext<RegisterPasswordValues>();

  return (
    <Form.FieldSet name="register-password">
      <Form.Input
        id="password"
        type="password"
        label="비밀번호"
        placeholder="******"
        {...register('password', makePasswordRegisterOptions('비밀번호'))}
        helperText={errors.password?.message}
      />
      <Form.Input
        id="confirm-password"
        type="password"
        label="비밀번호 확인"
        placeholder="******"
        {...register(
          'confirmPassword',
          makePasswordRegisterOptions('비밀번호 확인')
        )}
        helperText={errors.confirmPassword?.message}
      />
    </Form.FieldSet>
  );
}

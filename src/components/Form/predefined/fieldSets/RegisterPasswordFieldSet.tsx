import Form from '@/components/Form/Form';
import {useFormContext} from 'react-hook-form';
import PasswordField, {
  PasswordValues,
} from '@/components/Form/predefined/fields/PasswordField';

export interface RegisterPasswordValues extends PasswordValues {
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
      <PasswordField label="비밀번호" />
      <Form.Input
        id="confirm-password"
        type="password"
        label="비밀번호 확인"
        placeholder="********"
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

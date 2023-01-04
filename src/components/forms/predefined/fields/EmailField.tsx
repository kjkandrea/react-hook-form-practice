import regex from '@/const/regex';
import Form from '@/components/forms/Form/Form';
import {useFormContext} from 'react-hook-form';

export interface EmailValues {
  email: string;
}

interface EmailFieldProps {
  label: string;
}

export default function EmailField({label}: EmailFieldProps) {
  const {
    register,
    formState: {errors},
  } = useFormContext<EmailValues>();

  return (
    <Form.Input
      id="email"
      type="email"
      label={label}
      placeholder="example@email.com"
      {...register('email', {
        pattern: {
          value: regex.email,
          message: `올바른 ${label}을 입력하여주세요. 🙏`,
        },
        required: `${label}을 입력하여주세요. 🙏`,
      })}
      helperText={errors.email?.message}
    />
  );
}

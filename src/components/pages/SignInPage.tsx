import Form from '@/components/forms/Form/Form';
import {SubmitHandler, useForm, FormProvider} from 'react-hook-form';
import {EmailValues} from '@/components/forms/predefined/fields/EmailField';
import {PasswordValues} from '@/components/forms/predefined/fields/PasswordField';

type SignInFormValues = EmailValues & PasswordValues;

export default function SignInPage() {
  const methods = useForm<SignInFormValues>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<SignInFormValues> = data =>
    alert(JSON.stringify(data));

  return (
    <FormProvider {...methods}>
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Form.EmailField label="이메일" />
          <Form.PasswordField label="비밀번호" />
          <Form.Button type="submit">로그인하기</Form.Button>
        </Form>
      </div>
    </FormProvider>
  );
}

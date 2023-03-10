import Form from '@/components/Form/Form';
import {SubmitHandler, useForm, FormProvider} from 'react-hook-form';
import {EmailValues} from '@/components/Form/predefined/fields/EmailField';
import {RegisterPasswordValues} from '@/components/Form/predefined/fieldSets/RegisterPasswordFieldSet';

type SignUpFormValues = EmailValues & RegisterPasswordValues;

export default function SignUpPage() {
  const methods = useForm<SignUpFormValues>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = data =>
    alert(JSON.stringify(data));

  return (
    <FormProvider {...methods}>
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Form.EmailField label="이메일" />
          <Form.RegisterPasswordFieldSet />
          <Form.Button type="submit">가입하기</Form.Button>
        </Form>
      </div>
    </FormProvider>
  );
}

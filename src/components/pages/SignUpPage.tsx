import Form from '@/components/forms/Form/Form';
import {
  SubmitHandler,
  useForm,
  FormProvider,
  RegisterOptions,
} from 'react-hook-form';
import regex from '@/const/regex';

interface SignUpFormValues {
  email: string;
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

/**
 * TODO
 *
 * password 는 RegisterPasswordFieldSet 개념으로 그룹핑 시도해보기
 */
export default function SignUpPage() {
  const methods = useForm<SignUpFormValues>({
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = data =>
    alert(JSON.stringify(data));

  return (
    <FormProvider {...methods}>
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Form.EmailInput label="이메일" />
          {/*<Form.Input*/}
          {/*  id="password"*/}
          {/*  type="password"*/}
          {/*  label="비밀번호"*/}
          {/*  placeholder="******"*/}
          {/*  {...register('password', makePasswordRegisterOptions('비밀번호'))}*/}
          {/*  helperText={errors.password?.message}*/}
          {/*/>*/}
          {/*<Form.Input*/}
          {/*  id="confirm-password"*/}
          {/*  type="password"*/}
          {/*  label="비밀번호 확인"*/}
          {/*  placeholder="******"*/}
          {/*  {...register(*/}
          {/*    'confirmPassword',*/}
          {/*    makePasswordRegisterOptions('비밀번호 확인')*/}
          {/*  )}*/}
          {/*  helperText={errors.confirmPassword?.message}*/}
          {/*/>*/}
          <Form.Button type="submit">가입하기</Form.Button>
        </Form>
      </div>
    </FormProvider>
  );
}

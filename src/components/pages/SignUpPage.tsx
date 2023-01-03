import Form from '@/components/forms/Form/Form';
import {SubmitHandler, useForm} from 'react-hook-form';

interface SignUpFormValues {
  email: string;
  password: string;
  passwordRepeat: string;
}

/**
 * TODO
 *
 * password 는 RegisterPasswordFieldSet 개념으로 그룹핑 시도해보기
 */
export default function SignUpPage() {
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<SignUpFormValues>();
  const onSubmit: SubmitHandler<SignUpFormValues> = data => console.log(data);

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Input
          id="email"
          type="email"
          label="이메일"
          placeholder="example@email.com"
          {...register('email', {
            pattern:
              /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
          })}
        />
        {errors.email && '올바른 이메일을 입력하여주세요. 🙏'}
        <Form.Input
          id="password"
          type="password"
          label="비밀번호"
          placeholder="******"
          {...register('password')}
        />
        <Form.Input
          id="password-repeat"
          type="password"
          label="비밀번호 확인"
          placeholder="******"
          {...register('passwordRepeat')}
        />
        <Form.Button type="submit">가입하기</Form.Button>
      </Form>
    </div>
  );
}

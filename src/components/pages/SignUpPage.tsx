import Form from '@/components/forms/Form/Form';

export default function SignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Form>
        <Form.Input
          type="email"
          label="이메일"
          placeholder="example@email.com"
        />
        <Form.Input type="password" label="비밀번호" placeholder="******" />
        <Form.Input
          type="password"
          label="비밀번호 확인"
          placeholder="******"
        />
      </Form>
    </div>
  );
}

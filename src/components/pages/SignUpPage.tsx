import Form from '@/components/forms/Form/Form';

/**
 * TODO
 *
 * password 는 RegisterPasswordFieldSet 개념으로 그룹핑 시도해보기
 */
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

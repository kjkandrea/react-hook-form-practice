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
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Input
          ref={inputElem => inputElem?.focus()}
          id="email"
          type="email"
          label="이메일"
          placeholder="example@email.com"
        />
        <Form.Input
          id="password"
          type="password"
          label="비밀번호"
          placeholder="******"
        />
        <Form.Input
          id="password-repeat"
          type="password"
          label="비밀번호 확인"
          placeholder="******"
        />
        <Form.Button type="submit">가입하기</Form.Button>
      </Form>
    </div>
  );
}

import Form from '@/components/forms/Form/Form';
import {useState} from 'react';

/**
 * TODO
 *
 * password 는 RegisterPasswordFieldSet 개념으로 그룹핑 시도해보기
 */
export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Input
          ref={inputElem => email || inputElem?.focus()}
          id="email"
          type="email"
          label="이메일"
          placeholder="example@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Form.Input
          id="password"
          type="password"
          label="비밀번호"
          placeholder="******"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Form.Input
          id="password-repeat"
          type="password"
          label="비밀번호 확인"
          placeholder="******"
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
        />
        <Form.Button type="submit">가입하기</Form.Button>
      </Form>
    </div>
  );
}

import React, {useState} from 'react';

function signInMutation() {
  return {
    mutate: ({email, password}: {email: string; password: string}) =>
      console.log({email, password}),
    error: {
      message: '',
    },
  };
}

export default function HandmadeSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clientErrorMessage, setClientErrorMessage] = useState('');

  const {
    mutate,
    error: {message: serverErrorMessage},
  } = signInMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setClientErrorMessage('이메일을 입력하세요.');
      return;
    }

    if (!password.trim()) {
      setClientErrorMessage('비밀번호를 입력하세요.');
      return;
    }

    mutate({
      email,
      password,
    });
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {clientErrorMessage}
      {serverErrorMessage}
      <button type="submit">로그인</button>
    </form>
  );
}

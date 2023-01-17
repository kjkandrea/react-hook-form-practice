import React, {useState} from 'react';
import EmailField from '@/components/Form/predefined/fields/HandmadeEmailField';
import PasswordField from '@/components/Form/predefined/fields/HandmadePasswordField';

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

  const {
    mutate,
    error: {message: serverErrorMessage},
  } = signInMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      email,
      password,
    });
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <EmailField onComplete={email => setEmail(email)} />
      <PasswordField onComplete={password => setPassword(password)} />
      {serverErrorMessage}
      <button type="submit">로그인</button>
    </form>
  );
}

import React, {useState} from 'react';
import {FieldRegister} from '@/components/pages/HandmadeSignInPage';

interface PasswordFieldProps {
  register: FieldRegister;
}

export default function PasswordField({register}: PasswordFieldProps) {
  const [guideMessage, setGuideMessage] = useState('');

  return (
    <>
      <input
        type="password"
        {...register('password', (value: string) => {
          if (!value.trim()) {
            setGuideMessage('패스워드를 입력하세요.');
            return false;
          }

          return true;
        })}
      />
      {guideMessage}
    </>
  );
}

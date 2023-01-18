import React, {useState} from 'react';
import {FieldRegister} from '@/components/pages/HandmadeSignInPage';

interface EmailFieldProps {
  register: FieldRegister;
}

export default function EmailField({register}: EmailFieldProps) {
  const [guideMessage, setGuideMessage] = useState('');

  return (
    <>
      <input
        type="email"
        {...register('email', (value: string) => {
          if (!value.trim()) {
            setGuideMessage('이메일을 입력하세요.');
            return false;
          }

          return true;
        })}
      />
      {guideMessage}
    </>
  );
}

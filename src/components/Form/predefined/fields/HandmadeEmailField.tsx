import React, {useState} from 'react';

interface HandmadeEmailFieldProps {
  onComplete: (value: string) => void;
}

export default function EmailField({onComplete}: HandmadeEmailFieldProps) {
  const [value, setValue] = useState('');
  const [clientErrorMessage, setClientErrorMessage] = useState('');

  const validation = (email: string): boolean => {
    if (!email.trim()) {
      setClientErrorMessage('이메일을 입력하세요.');
      return false;
    }

    return true;
  };

  const tryOnComplete = () =>
    validation(value) ? onComplete(value) : onComplete('');

  return (
    <>
      <input
        type="email"
        name="email"
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => tryOnComplete()}
      />
      {clientErrorMessage}
    </>
  );
}

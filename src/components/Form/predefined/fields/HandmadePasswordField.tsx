import React, {useState} from 'react';

interface HandmadePasswordFieldProps {
  onComplete: (value: string) => void;
}

export default function HandmadePasswordField({
  onComplete,
}: HandmadePasswordFieldProps) {
  const [value, setValue] = useState('');
  const [clientErrorMessage, setClientErrorMessage] = useState('');

  const validation = (email: string): boolean => {
    if (!email.trim()) {
      setClientErrorMessage('패스워드를 입력하세요.');
      return false;
    }

    return true;
  };

  const tryOnComplete = () => validation(value) && onComplete(value);

  return (
    <>
      <input
        type="password"
        name="password"
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => tryOnComplete()}
      />
      {clientErrorMessage}
    </>
  );
}

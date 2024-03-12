import { useState } from 'react';

export const useUser = () => {
  const [user, setUser] = useState({ name: 'hoge', age: 20 });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };

  return { user, handleNameChange };
};

import { useState } from 'react';
import { useUserSWR } from './useStateSWR';

export const useUserHookSWR = () => {
  const [userSWR, setUserSWR] = useUserSWR('user', { name: 'hoge', age: 20 });

  const handleNameChangeSWR = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSWR({ ...userSWR, name: e.target.value });
  };

  return { userSWR, handleNameChangeSWR };
};

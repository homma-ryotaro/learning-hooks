import { useUserHookSWR } from '@/hooks/useswr/useUserSWR';
import React from 'react';

const NameFieldSWR = () => {
  const { userSWR } = useUserHookSWR();
  return (
    <div>
      {' '}
      <p>名前：{userSWR.name}</p>
      <p>年齢：{userSWR.age}</p>
    </div>
  );
};

export default NameFieldSWR;

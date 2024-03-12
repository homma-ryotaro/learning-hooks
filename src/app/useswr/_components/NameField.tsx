import { useUser } from '@/hooks/useswr/useUser';
import { useUserHookSWR } from '@/hooks/useswr/useUserSWR';
import React from 'react';

const NameField = () => {
  const { user } = useUser();
  return (
    <div>
      <p>名前：{user.name}</p>
      <p>年齢：{user.age}</p>
    </div>
  );
};

export default NameField;

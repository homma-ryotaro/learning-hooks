import { useUserHookSWR } from '@/hooks/useswr/useUserSWR';
import React from 'react';

const ChildrenUserSWR = () => {
  const { handleNameChangeSWR } = useUserHookSWR();
  return (
    <div>
      <input
        type="text"
        className="text-black"
        onChange={handleNameChangeSWR}
      />
    </div>
  );
};

export default ChildrenUserSWR;

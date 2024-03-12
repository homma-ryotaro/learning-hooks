import { useUser } from '@/hooks/useswr/useUser';
import React from 'react';

const ChildrenUser = () => {
  const { user, handleNameChange } = useUser();
  return (
    <div>
      <p>{user.name}</p>
      <input type="text" className="text-black" onChange={handleNameChange} />
    </div>
  );
};

export default ChildrenUser;

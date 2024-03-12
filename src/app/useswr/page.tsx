'use client';
import React from 'react';
import ChildrenUserSWR from './_components/ChildrenUserSWR';
import ChildrenUser from './_components/ChildrenUser';
import NameFieldSWR from './_components/NameFieldSWR';
import NameField from './_components/NameField';

const UseSwrHome = () => {
  return (
    <div>
      <h2>親SWR</h2>
      <NameFieldSWR />
      <h2>親</h2>
      <NameField />
      <h2>子</h2>
      <p>SWR</p>
      <ChildrenUserSWR />
      <p>NoSWR</p>
      <ChildrenUser />
    </div>
  );
};

export default UseSwrHome;

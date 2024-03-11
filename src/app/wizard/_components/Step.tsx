import React from 'react';
import { useWizard } from 'react-use-wizard';

const Step = ({ step }: { step: number }) => {
  const { handleStep } = useWizard();
  handleStep(() => {
    alert(`Step changed to ${step + 1}`);
  });
  return <></>;
};

export default Step;

import React from 'react';
import { useWizard } from 'react-use-wizard';

const StepHeader = () => {
  const { activeStep } = useWizard();
  return (
    <div className="flex justify-center mb-2 flex-col items-center">
      <h1 className="text-lg font-bold underline">Steps</h1>
      <span className="mt-2" />
      <h2>Step {activeStep + 1}</h2>
    </div>
  );
};

export default StepHeader;

import React, { FC } from 'react';
import { useWizard } from 'react-use-wizard';

const StepFooter: FC = () => {
  const {
    previousStep,
    nextStep,
    isFirstStep,
    isLastStep,
    goToStep,
    stepCount,
  } = useWizard();

  return (
    <>
      <div className="flex gap-2 mt-3 justify-center">
        <>
          <button
            onClick={() => goToStep(0)}
            className="border py-1 px-2 rounded-md bg-slate-500 hover:bg-orange-100 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isFirstStep}
          >
            FiarstStep
          </button>
          <button
            onClick={previousStep}
            className="border py-1 px-2 rounded-md hover:bg-orange-100 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isFirstStep}
          >
            Previous
          </button>
        </>
        <>
          <button
            onClick={nextStep}
            className="border py-1 px-2 rounded-md hover:bg-orange-100 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLastStep}
          >
            Next
          </button>
          <button
            onClick={() => goToStep(stepCount - 1)}
            className="border py-1 px-2 rounded-md bg-slate-500 hover:bg-orange-100 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLastStep}
          >
            LastStep
          </button>
        </>
      </div>
    </>
  );
};

export default StepFooter;

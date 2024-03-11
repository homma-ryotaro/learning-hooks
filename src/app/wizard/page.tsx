'use client';
import React, { useEffect, useRef } from 'react';
import { Wizard } from 'react-use-wizard';

import Step from './_components/Step';
import StepFooter from './_components/StepFooter';
import StepHeader from './_components/StepHeader';
import {
  useRouter,
  usePathname,
  useParams,
  useSearchParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  useServerInsertedHTML,
} from 'next/navigation';
const WizardHome = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const previousUrlRef = useRef(pathname);
  console.log('router:', router);
  console.log('pathname:', pathname);
  console.log('params:', params);
  console.log('searchParams:', searchParams);

  // ブラウザバックで前のページに戻った場合
  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);
  return (
    <div className="container">
      <Wizard
        header={<StepHeader />}
        footer={<StepFooter />}
        onStepChange={(step) => console.log('Step changed to', step)}
        wrapper={<div className="flex flex-col items-center"></div>}
      >
        <Step step={1} />
        <Step step={2} />
        <Step step={3} />
        <Step step={4} />
      </Wizard>
    </div>
  );
};

export default WizardHome;

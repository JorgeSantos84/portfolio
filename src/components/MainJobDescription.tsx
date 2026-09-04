import JobDescription from './JobDescription';
import { JOBS_EN, JOBS_PT } from '../constants/globalNames';
import { useState } from 'react';
import type { PastJobKey } from '../types/mainTypes';
import { useReachedTop } from '../hooks/useReachTop';
import { useToggleLanguage } from '../context/LanguageContext';

function MainJobDescription() {
  const [highlightedJobKey, setHighlightedJobKey] = useState<PastJobKey | null>(
    null,
  );

  const { ref, reachedTop } = useReachedTop<HTMLDivElement>(0);
  const { language } = useToggleLanguage();

  return (
    <div
      id="work"
      className={
        'flex flex-col gap-1 items-center w-full' +
        (reachedTop ? ' sticky top-0 z-10' : '')
      }
      ref={ref}
    >
      {(language === 'PT' ? JOBS_PT : JOBS_EN).map((job) => (
        <JobDescription
          key={job.jobName}
          {...job}
          isHighlighted={job.jobName === highlightedJobKey}
          setHighlightedJobKey={setHighlightedJobKey}
        />
      ))}
    </div>
  );
}

export default MainJobDescription;

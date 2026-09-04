import type { JobDescriptionProps } from '../types/mainTypes';
import { PASS_JOBS } from '../constants/globalNames';
import { useEffect, useState } from 'react';
import type { PastJobKey } from '../types/mainTypes';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useReachedTop } from '../hooks/useReachTop';
import CheckIcon from '@mui/icons-material/Check';
import ButtonWorkLanguages from './ButtonWorkLanguages';

type JobDescriptionComponentProps = JobDescriptionProps & {
  isHighlighted: boolean;
  setHighlightedJobKey:
    React.Dispatch<React.SetStateAction<PastJobKey | null>> | undefined;
};

function JobDescription(
  props: JobDescriptionComponentProps,
): React.ReactElement {
  const { jobName, details, isHighlighted, setHighlightedJobKey } = props;
  const [expanded, setExpanded] = useState(false);
  const { ref, reachedTop } = useReachedTop<HTMLDivElement>(0);
  const [canExpand, setCanExpand] = useState(false);
  const descriptionRef = useReachedTop<HTMLDivElement>(0).ref;

  useEffect(() => {
    if (!descriptionRef.current) return;

    if (descriptionRef.current) {
      const descriptionHeight = descriptionRef.current.scrollHeight;
      const containerHeight = descriptionRef.current.clientHeight;

      setCanExpand(descriptionHeight > containerHeight);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-start gap-4 p-4 border-t-2 border-t-[var(--text)] md:flex-row max-w-7xl"
    >
      <div
        className={
          'w-full' +
          (isHighlighted
            ? ' border-r-2 md:w-auto md:border-r-2 border-[var(--default-purple)]'
            : ' md:w-auto')
        }
      >
        <button
          type="button"
          onClick={() => setHighlightedJobKey?.(jobName)}
          className="w-full text-left md:w-auto"
        >
          <div
            className={
              'flex w-full flex-col items-start gap-1 md:min-w-[200px] md:max-w-[300px]'
            }
          >
            <p className="text-[var(--default-purple)] font-bold text-[20px]">
              {PASS_JOBS[jobName]}
            </p>
            <p className="text-[15px]">{details.title}</p>
            <p className="text-[15px]">{details.location}</p>
            <p className="text-[13px]">
              {details.startDate} - {details.endDate}
            </p>
          </div>
        </button>
      </div>
      {/* Job Description */}
      <div className="relative min-w-0 flex-1">
        <div
          ref={descriptionRef}
          className={`
            pr-10 text-left text-pretty
            ${
              expanded
                ? 'max-h-none overflow-visible'
                : reachedTop
                  ? 'max-h-[calc(100vh-150px)] md:max-h-[200px] overflow-y-auto'
                  : 'max-h-[calc(100vh-150px)] md:max-h-[200px] overflow-hidden'
            }
          `}
        >
          {details.description.map((section, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{section.title}</p>
              <ul className="list-disc pl-5">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-1 text-[var(--default-purple)]"
                      fontSize="small"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            {details.technologies && details.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech, index) => (
                  <ButtonWorkLanguages key={index} technology={tech} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Expand / collapse */}
        {canExpand && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="absolute bottom-0 right-0 rounded-full bg-white p-1 shadow-sm hover:bg-gray-100"
            aria-label={
              expanded ? 'Collapse description' : 'Expand description'
            }
          >
            <ExpandMoreIcon
              className={`transition-transform duration-200 ${
                expanded ? 'rotate-180' : 'rotate-0'
              }`}
              fontSize="small"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default JobDescription;

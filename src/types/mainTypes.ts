import type { PASS_JOBS } from '../constants/globalNames';

export type JobDetails = {
  title: string;
  company: (typeof PASS_JOBS)[keyof typeof PASS_JOBS];
  location: string;
  description: JobDescriptionDescriptionProps[];
  startDate: string;
  endDate: string;
  technologies?: string[];
};

export type PastJobKey = keyof typeof PASS_JOBS;

export type JobDescriptionProps = {
  jobName: PastJobKey;
  details: JobDetails;
};

export type JobDescriptionDescriptionProps = {
  title: string;
  items: string[];
};

import React, { useContext, useEffect } from 'react';
import { AppliedJobContext, AvailableJobContext } from '../Layout/Main';
import { getAppliedList } from '../Utilities/Fakedb';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const AppliedJobs = () => {
  const availableJobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext);

  useEffect(() => {
    const appliedListsDb = getAppliedList();
    const fakeAppliedJob = [];
    if (appliedJobs.length == 0) {
      for (const id in appliedListsDb) {
        const job = availableJobs.find(availableJob => availableJob.id === id);
        if (job) {
          fakeAppliedJob.push(job);
        }
      }
      setAppliedJobs(fakeAppliedJob);
    }
  }, [availableJobs]);

  return (
    <div>
      <Banner>Applied Jobs</Banner>
      <div className='details-container'>
        <p>{appliedJobs.length}</p>
      </div>
    </div>
  );
};

export default AppliedJobs;
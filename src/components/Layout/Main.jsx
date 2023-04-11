import React, { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { getAppliedList } from '../Utilities/Fakedb';

export const AppliedJobContext = createContext([]);
export const AvailableJobContext = createContext([]);

const Main = () => {
  const [availableJobs, setAvailableJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // useEffect(() => {
  //   const appliedListsDb = getAppliedList();
  //   const fakeAppliedJob = [];
  //   if (appliedJobs.length == 0) {
  //     for (const id in appliedListsDb) {
  //       const job = availableJobs.find(availableJob => availableJob.id === id);
  //       if (job) {
  //         fakeAppliedJob.push(job);
  //       }
  //     }
  //     setAppliedJobs(fakeAppliedJob);
  //   }
  //   console.log(appliedJobs);
  // }, [availableJobs]);


  return (
    <>
      <AvailableJobContext.Provider value={[availableJobs, setAvailableJobs]}>
        <AppliedJobContext.Provider value={[appliedJobs, setAppliedJobs]}>
          <Header></Header>
          <Outlet></Outlet>
        </AppliedJobContext.Provider>
      </AvailableJobContext.Provider>
      <Toaster />
    </>
  );
};

export default Main;
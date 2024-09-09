// src/pages/Home.js
import React from 'react';
import { jobs } from '../data/jobs';
import JobCard from '../components/JobCard';

const Home = () => {
  return (
    <div className="job-listings">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Home;

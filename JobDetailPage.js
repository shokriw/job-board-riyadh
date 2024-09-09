// src/pages/JobDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { jobs } from '../data/jobs';
import JobForm from '../components/JobForm';

const JobDetailPage = () => {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.description}</p>
      <p>{job.requirements}</p>
      
      {/* Job application form */}
      <JobForm jobId={id} />
    </div>
  );
};

export default JobDetailPage;

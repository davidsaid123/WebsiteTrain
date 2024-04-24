import React from 'react';
import { Link } from 'react-router-dom';

const jobs = [
  { id: '1', title: 'Mechanical Engineer - Entry Level', function: 'Operations', type: 'Full-Time', location: 'Toronto' },
  { id: '2', title: 'Electrical Engineer - Mid Level', function: 'Operations', type: 'Full-Time', location: 'Toronto' },
  { id: '3', title: 'Civil Engineer - Senior Level', function: 'Operations', type: 'Full-Time', location: 'Toronto' }
];

const JobList = () => {
  return (
    <div className="job-list">
      <h2>Available Engineering Positions</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>
              <h3>{job.title}</h3>
              <p>{job.function} | {job.type} | {job.location}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;

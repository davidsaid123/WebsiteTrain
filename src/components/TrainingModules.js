import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const modules = [
  { id: 'WHMIS', name: 'WHMIS' },
  { id: 'Workplace violence and harassment', name: 'Workplace violence and harassment' },
  { id: 'AODA', name: 'AODA' },
  { id: 'PPE', name: 'PPE' }
];

const TrainingModules = () => {
  return (
    <div>
      <h2>Training Modules</h2>
      <ul>
        {modules.map(module => (
          <li key={module.id}>
            <Link to={`/modules/${module.id}`}>{module.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingModules;

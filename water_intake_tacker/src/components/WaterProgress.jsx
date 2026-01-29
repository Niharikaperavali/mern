import React from 'react';

const WaterProgress = ({ total, goal }) => {
  const percent = Math.min((total / goal) * 100, 100);

  return (
    <div className="progress-card">
      <h2>{total} ml / {goal} ml</h2>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }}></div>
      </div>
      <p>{percent.toFixed(1)}% completed</p>
    </div>
  );
};

export default WaterProgress;

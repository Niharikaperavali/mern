import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const WaterChart = ({ history }) => {
  const last7Days = history.slice(-7);

  if (last7Days.length === 0) return null;

  return (
    <div className="chart-card">
      <h2>📈 Last 7 Days</h2>
      <BarChart width={450} height={250} data={last7Days}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#00c6ff" radius={[10,10,0,0]} />
      </BarChart>
    </div>
  );
};

export default WaterChart;

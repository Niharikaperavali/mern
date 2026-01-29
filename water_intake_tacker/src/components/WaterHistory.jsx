import React from 'react';

const WaterHistory = ({ history }) => {
  if (history.length === 0) return null;

  return (
    <div className="history-card">
      <h2>📅 History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Water (ml)</th>
          </tr>
        </thead>
        <tbody>
          {history.slice(-7).reverse().map((h, i) => (
            <tr key={i}>
              <td>{h.date}</td>
              <td>{h.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WaterHistory;

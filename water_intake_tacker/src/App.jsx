import React, { useState } from 'react';
import WaterInput from './components/WaterInput';
import WaterProgress from './components/WaterProgress';
import WaterHistory from './components/WaterHistory';
import WaterChart from './components/WaterChart';
import './App.css';

const App = () => {
  const dailyGoal = 2000;

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('waterHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const today = new Date().toLocaleDateString();
  const todayEntry = history.find(entry => entry.date === today);
  const totalWater = todayEntry ? todayEntry.total : 0;

  const addWater = (amount) => {
    const existing = history.find(entry => entry.date === today);

    let newHistory;
    if (existing) {
      newHistory = history.map(entry =>
        entry.date === today ? { ...entry, total: entry.total + amount } : entry
      );
    } else {
      newHistory = [...history, { date: today, total: amount }];
    }

    setHistory(newHistory);
    localStorage.setItem('waterHistory', JSON.stringify(newHistory));
  };

  return (
    <div className="dashboard">
      
      <div className="sidebar">
        <h1>💧 Water Tracker</h1>
        <p className="subtitle">Stay hydrated, stay healthy</p>

        <WaterInput addWater={addWater} />
        <WaterProgress total={totalWater} goal={dailyGoal} />
      </div>

      <div className="main-content">
        <WaterChart history={history} />
        <WaterHistory history={history} />
      </div>

    </div>
  );
};

export default App;

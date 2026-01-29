import React, { useState } from 'react';

const WaterInput = ({ addWater }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = parseInt(amount);
    if (!isNaN(val) && val > 0) {
      addWater(val);
      setAmount('');
    }
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter water in ml"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button>Add 💦</button>
    </form>
  );
};

export default WaterInput;

import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const cubeNumber = (num) => {
    console.log("calculation done");
    return Math.pow(num, 3);
  };

  // useMemo applied here 
  const result = useMemo(() => {
    return cubeNumber(number);
  }, [number]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <p>The cube is: {result}</p>
    </div>
  );
};

export default UseMemo;

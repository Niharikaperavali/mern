import React, { useState, useCallback } from 'react';
import Header from '../component/Header';

const UseCallBack = () => {
  const [count, setCount] = useState(0);

  const newFun = useCallback(() => {
    console.log("Callback function called");
  }, [count]);

  return (
    <div>
      <Header newFun={newFun} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseCallBack;

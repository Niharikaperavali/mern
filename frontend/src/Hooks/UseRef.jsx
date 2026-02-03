import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);

  const value = useRef(0);      
  const inputRef = useRef();    
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);
  useEffect(() => {
    value.current = value.current + 1;
  }, [count]);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "pink";
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <p>{value.current} times component rendered</p>

      <input type="text" ref={inputRef} />

      <button onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default UseRef;

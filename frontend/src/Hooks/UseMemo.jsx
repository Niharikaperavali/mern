import {useState,useMemo} from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    const cube = (num) => {
        console.log('Calculation done......');
        return Math.pow(num, 3);
    };
    const result = useMemo(() => {
        return cube(number);
    }, [number]);
    
    const handleIncrement = () => {
        setCount(count + 1);
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <p>Cube of the number is: {result}</p>
      
    </div>
  )
}

export default UseMemo

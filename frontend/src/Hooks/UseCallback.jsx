import {use, useCallback, useState} from 'react'
import Header from '../component/Header';

const UseCallback = () => {
    const [count,setCount]=useState(0);
    const newfn = useCallback(() => {
     
    }, [count]);
  return (
    <div>
      <Header newfn={newfn} />
      <h1>{count}</h1>
      <button onClick= {() => {setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default UseCallback

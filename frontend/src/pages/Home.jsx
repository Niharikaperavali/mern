import React, { use } from 'react'
import {useNavigate} from "react-router-dom";

const Home = ({name}) => {

    const navigate =useNavigate();
    const handleClick=()=>{
    navigate('/about');
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>go to about page</button>
  
    </div>
  )
}

export default Home

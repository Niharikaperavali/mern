import React,{useState} from 'react'
import Service from './Service';

const Contactus = (props) => {
  const [name, setName] = useState("Nihari");
  const toggleName = () => {
    setName(name === "Nihari" ? "Niha" : "Nihari");
  }
  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={toggleName}>Toggle</button>

    </div>
  )
}

export default Contactus

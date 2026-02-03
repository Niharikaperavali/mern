import React from 'react'


const About = (props) => {
  return (
    <div>
      <h1>Message: {props.msg}</h1>
      <h1>Registerno: {props.registerNo}</h1>
      <h1>Email: {props.email}</h1>
     
    
    </div>
  )
}

export default About


//functional component

// function App(){
//   return(
//     <h1>hello</h1>
//   )
// }
// export default App;

//class component
// import {Component} from "react";

// class App extends Component{
//   render(){
//     return(
//       <h1>hello class Component</h1>
//     )
//   }
// }
// export default App;

import Navbar from "./component/Navbar"
import Contactus from "./pages/Contactus"
import Home from "./pages/Home"
import About from "./pages/about"
import Service from "./pages/Service"
import UseState from "./Hooks/UseState"
import Login from "./Auth/Login"
import {Routes,Route} from "react-router-dom"


const App = () => {
  
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home name="Niha"/>} />  
        <Route path="/about" element={<About name="am about page" registerNo="23691A3298" email="peravaliniharika@gmail.com" />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App


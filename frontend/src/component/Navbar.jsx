import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
            <li><Link className="link" to="/home">Home</Link></li>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/Contactus">Contact</Link></li>
            <li><Link className="link" to="/Service">Service</Link></li>
            <li><Link className="link" to="/useState">UseState</Link></li>
            <li><Link className="link" to="/login">Login</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to="useState">useState</Link></li>
            <li><Link to="useEffect">useEffect</Link></li>
            <li><Link to="useeffectapi">useEffect Api</Link></li>
            <li><Link to="useRef">useRef</Link></li>
        </ol>
        <Outlet />
    </div>
  )
}

export default Hook

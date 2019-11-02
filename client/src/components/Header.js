import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">CodeWorker API Auth</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link">Sign In</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signout" className="nav-link">Sign Out</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

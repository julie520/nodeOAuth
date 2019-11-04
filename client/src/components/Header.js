import React, { Fragment } from 'react'
import { NavLink, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { signOut } from "../actions"

const Header = ({ isAuthenticated, signOut, history }) => {
  const authLink = isAuthenticated ? (
      <li className="nav-item">
        <a href="!#" onClick={() => signOut(history)} className="nav-link">Sign Out</a>
      </li>
  ) : (
      <Fragment>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">Sign In</NavLink>
        </li>
      </Fragment>
    )
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: '30px'}}>
      <NavLink to="/" className="navbar-brand">CodeWorker API Auth</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          {authLink}
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {signOut})(withRouter(Header));

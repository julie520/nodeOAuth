import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

const AuthGuard = ({ component: Component, isAuthenticated, rest }) => {
  if (isAuthenticated) return <Component {...rest} /> 
  else return <Redirect to='/' />

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(AuthGuard);

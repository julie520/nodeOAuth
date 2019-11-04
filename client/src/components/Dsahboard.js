import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {getSecret} from "../actions"

const Dsahboard = ({ getSecret, secret }) => {
  useEffect(() => {
    getSecret();
  }, [getSecret])
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{secret}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  secret: state.dashboard.secret
})

export default connect(mapStateToProps, { getSecret })(Dsahboard);

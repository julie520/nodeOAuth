import React, {useState} from 'react'
import { reduxForm, Field } from "redux-form"
import {connect} from "react-redux"
import { compose } from "redux";
import {signUp, oauthGoogle, oauthFacebok} from "../actions"
import CustomInput from "./CustomInput";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

const SignUp = ({errorMessage, signUp, oauthGoogle, oauthFacebok, history}) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email, password} = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signUp(formData, history);
  }
  
  const responseGoogle = (response) => {
    console.log(response);
    oauthGoogle({ "access_token": response.accessToken }, history);
  }
  const responseGoogleFail = (error) => {
    console.error(error);
  }

  const responseFacebook = (response) => {
    console.log(response);
    oauthFacebok({ "access_token": response.accessToken }, history);
  }

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={e => handleSubmit(e)}>
          <fieldset>
            <Field
              name="email"
              type="text"
              id="email"
              label="Enter your email"
              placeholder="example@example.com"
              value={email}
              handleChange={handleChange}
              component={CustomInput} />
          </fieldset>
          <fieldset>
            <Field
              name="password"
              type="password"
              id="password"
              label="Enter your password"
              placeholder="yoursuperpassword"
              value={password}
              handleChange={handleChange}
              component={CustomInput} />
          </fieldset>
          {errorMessage && (
            <div className="alert alert-danger">
              {errorMessage}
            </div>
          )}
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
      <div className="col">
        <div className="text-center">
          <div className="alert alert-primary">
            Or sign up using third party services
          </div>
          <FacebookLogin
            appId="2809531785725292"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends,user_actions.books"
            callback={responseFacebook}
            cssClass="btn btn-outline-primary mr-1"
            textButton="Facebook"
          />
          <GoogleLogin
            clientId="81338648944-1rld2gf655gouth7ggv5nlr6uka3kn9r.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogleFail}
            className="btn btn-outline-danger"
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
})

export default compose(
  connect(mapStateToProps, { signUp, oauthGoogle, oauthFacebok }),
  reduxForm({ form: 'signup' })
)(SignUp);

import React, {useState} from 'react'
import {reduxForm, Field} from "redux-form"
import CustomInput from "./CustomInput"

const SignUp = () => {

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
              label="Enter ypur email"
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
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
      <div className="col">
        <div className="text-center">
          <div className="alert alert-primary">
            Or sign up using third party services
          </div>
          <button className="btn btn-secondary">Facebook</button>
          <button className="btn btn-secondary">Google</button>
        </div>
      </div>
    </div>
  )
}

export default reduxForm({form: 'signup'})(SignUp)

import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const renderField = ({ type, label, input, meta: { touched, error }}) => (
  <div className="input-row">
    <label>{label}</label>
    <br />
    <input {...input} type={type}/>
    {touched && error && 
     <span className="error">{error}</span>}
  </div>
)

const submit = ({ firstName='', lastName='', email='', password=''}) => {
  let error = {};
  let isError  = false;
  if (firstName.trim() === '') {
    error.firstName = "Required";
    isError = true;
  }

  if (firstName.length > 10) {
    error.firstName = "Long";
    isError = true;
  }

  if (lastName.trim() === '') {
    error.lastName = "Required";
    isError = true;
  }

  if (email.trim() === '') {
    error.email = "Required";
    isError = true;
  }
  if (password.trim() === '') {
    error.password = "Required";
    isError = true;
  }

if (isError) {
  throw new SubmissionError(error);
  
} else {
  //submit form to server
  console.log('Submit Validation')
}
}

const ContactFormFunc = ({ 
  handleSubmit, 
  onChangeEmail, 
  onChangePassword, 
  email, 
  isEnabled, 
  password
}) => (
  
    <form onSubmit={handleSubmit(submit)}>
      <div>Регистация</div>
      <br />
      <Field 
      name="firstName" 
      label = "First Name" 
      component={renderField} 
      type="text"  
      />
      <Field 
      name="lastName" 
      label = "Last Name"
      component={renderField} 
      type="text" 
      />
      <Field
       name="email"
       label = "Email"
       component={renderField} 
       type="email" 
       placeholder="you@email.com"
       value={password} 
       onChange={onChangeEmail} 
       />
      <Field 
      name="password" 
      label = "Password "
      component={renderField} 
      type="password"  
      value={email}
      onChange={onChangePassword}
      />
      <br />
        <Button variant="contained" disabled={!isEnabled}>Submit</Button>
       
        
    </form> 
     
)

const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactFormFunc)

export default ContactForm
import React from 'react'
import ContactForm from "../components/register/register"

class ContactPage extends React.Component {
  constructor() {
    super();
  
    this.state = {
      
      email: "",
      password: "",
      firstname:"",
      secondname:"",
    };
   
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };
  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };
  
  render() {
    const { email, password } = this.state;
    const isEnabled = email.length > 1 && password.length > 1;
    return <ContactForm 
    
    onChangePassword={this.handlePasswordChange}
    onChangeEmail={this.handleEmailChange}
    password={this.state.password}
    email={this.state.email}
    isEnabled={isEnabled} />
  }
}
export default ContactPage

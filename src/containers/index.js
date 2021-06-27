import React from 'react'
import ContactForm from "../components/register/register"

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = () => {
   
  };
  render() {
    const { email, password } = this.state;
    const isEnabled = email.length > 1 && password.length > 1;
    return <ContactForm 
    handleSubmit={this.handleSubmit}
    onChangePassword={this.handlePasswordChange}
    onChangeEmail={this.handleEmailChange}
    password={this.state.password}
    email={this.state.email}
    isEnabled={isEnabled} />
  }
}
export default ContactPage

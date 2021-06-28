import React from 'react';
import FormCode from '../components/register/register';

class Form extends React.Component {
  submit(values) {
    console.log(values);
  }
  render() {
    return (
      <div className="container">
        <h3 className="form">Авторизация</h3>
        <FormCode onSubmit={this.submit} />
      </div>
      
    )
  }
}

export default Form;


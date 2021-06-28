import React from "react";
import Login from "../components/login";

import { connect } from "react-redux";
import { loginRequest } from "../actions/index";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "ALL PROPS");
  }

  OnLoginUser = (login) => {
    console.log(login, "LOGIN");
    this.props.loginRequest(login);
  };

  render() {
    const initialFormValues = {
      email: "",
      password: "",
    };
    return <div className="container">
    <h3 className="form">Вход</h3>
    <br />
    <Login initialFormValues={initialFormValues} onLogin={this.OnLoginUser} />
    
  </div>
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (value) => dispatch(loginRequest(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

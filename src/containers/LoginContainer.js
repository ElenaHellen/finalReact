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
    return <Login initialFormValues={initialFormValues} onLogin={this.OnLoginUser} />;
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

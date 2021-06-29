import React from "react";
import Register from "../components/register";

import { connect } from "react-redux";
import { registerRequest } from "../actions/index";

class RegisterContainer extends React.Component {
  render() {
    const initialFormValues = {
      email: "",
      firstName: "",
      secondName: "",
    };
    const OnRegisterUser = (register) => {
      console.log("Params: ", register);
      console.log("firstName:", register.firstName);
      console.log("firstName trim:", register.firstName.trim());
      this.props.history.push('/login')
    };

    return <Register initialFormValues={initialFormValues} onRegister={OnRegisterUser} />;
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRequest: (value) => dispatch(registerRequest(value)),
  };
};
export default  connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";

const DefaultRoute = ({ component: Component, isAuthorized, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

DefaultRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  isAuthorized: PropTypes.bool,
};

export default DefaultRoute;

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Route from "./components/route";
import RegisterPage from "../src/containers/RegisterContainer";
import LoginPage from "../src/containers/LoginContainer";
import HomePage from "../src/containers/HomeContainer";

import { root, login, home} from "./AppRoutes";


function App(props) {
  const { history } = props
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={root} component={RegisterPage} />
          <Route history={history} path={login} component={LoginPage} />
          <Route history={history} path={home} component={HomePage} />
          <Redirect to={root} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

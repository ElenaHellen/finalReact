import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Route from "./components/route";

import RegisterPage from "../src/containers/index";
import LoginPage from "../src/containers/LoginContainer";

import { root} from "./AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={root} component={RegisterPage} />
          <Route path={root} component={LoginPage} />
          
          <Redirect to={root} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


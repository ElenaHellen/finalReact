import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Redirect, PrivateRoute } from "react-router-dom";
import Route from "./components/route";
//import HomePage from "../src/containers/HomeContainer"
import RegisterPage from "../src/containers/registerContainer";
import Login from "../src/containers/LoginContainer";

import { root, login} from "./AppRoutes";

function App() {
  return (
    <Router>
          <div className="App">
        <Switch>
        
          <Route path={root} component={RegisterPage} />
          <Route path={login} component={Login} />
          
          <Redirect to={root} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


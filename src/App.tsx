import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/scss/styles.scss";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.css";

import { RouteBase } from "constants/routeUrl";
import DefaultLayout from "layout/DefaultLayout";
import LoginPage from "views/Login";

const App: React.FC = () => {
  // RENDER
  return (
    <Router>
      <Switch>
        <Route path={RouteBase.Login} exact component={LoginPage} />
        <Route path={RouteBase.Home} component={DefaultLayout} />
      </Switch>
    </Router>
  );
};

export default App;

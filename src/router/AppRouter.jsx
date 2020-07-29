import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./router";

const AppRouter = () => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);

export default AppRouter;

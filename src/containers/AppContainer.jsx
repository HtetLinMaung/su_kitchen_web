import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, useLocation } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";

import AppDrawer from "../components/AppDrawer";
import HeaderBar from "../components/HeaderBar";

import { DoubleArrow } from "@material-ui/icons";

import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    flex: 1
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0
  }
}));

const AppContainer = ({ routes }) => {
  const matches = useMediaQuery("(max-width:473px)");
  const location = useLocation();
  const classes = useStyles();
  const showHideStyle = {
    display: location.pathname.indexOf("/admin/login") !== -1 ? "none" : ""
  };

  return (
    <Grid container>
      <AppDrawer
        style={{
          display:
            location.pathname.indexOf("/admin/login") !== -1 || matches
              ? "none"
              : ""
        }}
      />
      <Fab
        style={{ display: !matches ? "none" : "" }}
        color="primary"
        aria-label="add"
        className={classes.fab}
      >
        <DoubleArrow />
      </Fab>
      <HeaderBar style={showHideStyle} />
      <Grid item className={classes.container}>
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
      </Grid>
    </Grid>
  );
};

export default AppContainer;

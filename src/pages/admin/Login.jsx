import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import FocusTextField from "../../components/FocusTextField";

import coverImage from "../../assets/images/ma-la-xiang-guo-10.jpg";

const useStyles = makeStyles(() => ({
  coverImageContainer: {
    height: "100vh"
  },
  coverImage: {
    width: "100%",
    height: "100%"
  },
  controls: {
    backgroundColor: "#F3F5F9"
  },
  title: {
    color: "#41546B"
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        justify="center"
        alignItems="center"
        container
        item
        xs={7}
        className={classes.controls}
      >
        <Grid
          item
          container
          spacing={3}
          xs={4}
          direction="column"
          justify="center"
        >
          <Grid item>
            <h2 className={classes.title}>Login to Su's Kitchen Admin</h2>
          </Grid>
          <Grid item>
            <FocusTextField placeholder="Phone number" />
          </Grid>
          <Grid item>
            <FocusTextField type="password" placeholder="Password" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5} className={classes.coverImageContainer}>
        <img src={coverImage} className={classes.coverImage} alt="" />
      </Grid>
    </Grid>
  );
};

export default Login;

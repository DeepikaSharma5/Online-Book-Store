import React, { useState } from "react";
import { Button, Grid, Box } from "@material-ui/core";

import styles from "./Login.module.scss"
import { LoginForm } from "../../components";
import { APP_ROUTES } from "../../utilities/constants/routes.constants";

const Login = () => {
  return (
    <React.Fragment>
      <Grid container direction="row" className="content-padding">
        <Grid item direction="column" md={4} className={styles.leftCol}>
          <h3 className={styles.explore}>
            EXPLORE!
          </h3>
          <div className={styles.tagBox}>
            <p className={styles.tagLine}>
              The world's books at your fingertips
            </p>
          </div>
          <Box textAlign="center">
            <Button className={styles.signUpBtn} href={APP_ROUTES.SIGNUP}>SIGN UP !</Button>
          </Box>
        </Grid>
        <Grid
          item
          direction="column"
          md={8}
          spacing={4}
          justify="center"
          alignItems="center"
        >
          <h3 className="font-weight-bold" className={styles.signin}>
            SIGN IN
          </h3>
          <LoginForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;

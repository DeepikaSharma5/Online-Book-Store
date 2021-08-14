import React, { useState } from "react";
import { Button, Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "./Signup.module.scss";
import { SignupForm } from "../../components";
import { APP_ROUTES } from "../../utilities/constants/routes.constants";

const Signup = () => {
  return (
    <React.Fragment>
      <Grid container direction="row" className="content-padding">
        <Grid
          item
          direction="column"
          md={8}
          spacing={4}
          justify="center"
          alignItems="center"
        >
          <h3 className="font-weight-bold" className={styles.signin}>
            Start Exploring
          </h3>
          <p className={styles.tagLineSignup}>
            There's something for everyone!
          </p>
          <SignupForm />
        </Grid>
        <Grid item direction="column" md={4} className={styles.leftCol}>
          <h3 className={styles.explore}>Welcome Back!</h3>
          <div className={styles.tagBox}>
            <p className={styles.tagLine}>
              The world's books at your fingertips
            </p>
          </div>
          <Box textAlign="center">
            <Button className={styles.signUpBtn} href={APP_ROUTES.LOGIN}>LOG IN</Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;

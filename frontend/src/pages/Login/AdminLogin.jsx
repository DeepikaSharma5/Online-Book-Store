import React from "react";
import { Button, Grid, Box } from "@material-ui/core";

import styles from "./Login.module.scss"
import { AdminLoginForm } from "../../components";

const Login = () => {
  return (
    <React.Fragment>
      <Grid container direction="row" className="content-padding">
        <Grid item direction="column" md={4} className={styles.leftCol}>
          <h3 className={styles.adminHeader}>
            Administartor Panel
          </h3>
          <div className={styles.tagBox}>
            <p className={styles.admintagLine}>
              Sign in using the administartor credentials received. 
            </p>
          </div>
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
          <AdminLoginForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;

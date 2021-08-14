import React, { useState } from "react";
import { Grid, TextField, Box, Button } from "@material-ui/core";

import styles from "../Login/LoginForm.module.scss";

const SignupForm = () => {
  return (
      <React.Fragment>
        <form style={{ marginTop: "10px" }}>
          <Grid alignItems="center" container direction="column">
          <p style={{width: "400px", margin: "0px", color: "#898989"}}>* Required</p>
          <TextField
              label="Name *"
              variant="outlined"
              className={styles.textField}
            />
            <TextField
              label="Email *"
              variant="outlined"
              className={styles.textField}
            />
            <TextField
              label="Contact number *"
              variant="outlined"
              className={styles.textField}
            />
            <TextField
              label="New password *"
              variant="outlined"
              type="password"
              className={styles.textField}
            />
            <Box textAlign="center">
              <Button className={styles.signInBtn}>SIGN IN</Button>
            </Box>
          </Grid>
        </form>
      </React.Fragment>
  );
};

export default SignupForm;

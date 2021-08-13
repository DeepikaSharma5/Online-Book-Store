import React, { useState } from "react";
import { Grid, TextField, Box, Button } from "@material-ui/core";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
      <React.Fragment>
        <form style={{ marginTop: "70px" }}>
          <Grid alignItems="center" container direction="column">
            <TextField
              label="Email"
              variant="outlined"
              className={styles.textField}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              className={styles.textField}
            />
            <Box textAlign="center">
              <Button className={styles.signInBtn}>LOG IN</Button>
            </Box>
          </Grid>
        </form>
      </React.Fragment>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { Grid, TextField, Box, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import styles from "./LoginForm.module.scss";

import { useHistory } from "react-router-dom";
import { login } from "../../services/userService";
import { APP_ROUTES } from "../../utilities/constants/routes.constants";

const LoginForm = () => {
  const history = useHistory();
  const [error, setError] = useState(null);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((current) => {
      return {
        ...current,
        [e.target.id]: e.target.value,
      };
    });
  };

  async function handleSubmit(event) {
    setError(null);

    if (!user.email.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g)) {
      setError("Please enter a valid email");
    } else {
      const response = await login(user);
      if (response !== "ok") {
        //SHOW error message as alert
        console.log(response);
        setError(response);
      } else {
        console.log("User logged in");
        window.location.href = APP_ROUTES.USER_PERSONAL_DETAILS;
      }
    }
  }

  return (
    <React.Fragment>
      <form style={{ marginTop: "70px" }}>
        <Grid alignItems="center" container direction="column">
          <Box textAlign="center" md={4} style={{ margin: "10px 0px" }}>
            {error ? <Alert severity="warning">{error}</Alert> : null}
          </Box>
          <TextField
            label="Email"
            variant="filled"
            id="email"
            onChange={handleChange}
            className={styles.textField}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            id="password"
            onChange={handleChange}
            className={styles.textField}
          />
          <Box textAlign="center">
            <Button onClick={handleSubmit} className={styles.signInBtn}>
              LOG IN
            </Button>
          </Box>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;

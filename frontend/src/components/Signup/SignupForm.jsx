import React, { useState } from "react";
import { Grid, TextField, Box, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import styles from "../Login/LoginForm.module.scss";

import { register } from "../../services/userService";

const SignupForm = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setNewUser((current) => {
      return {
        ...current,
        [e.target.id]: e.target.value,
      };
    });
  };

  async function handleSubmit(event) {
    setError(null);
    setSuccess(null);

    if(newUser.name === "" | newUser.email === "" | newUser.password === "" | newUser.phone === ""){
      setError("Please all required fields")
    }else if (newUser.phone.length < 10 | isNaN(newUser.phone)) {
      setError("Please enter a valid phone number")
    } else if(!newUser.email.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g)){
      setError("Please enter a valid email")
    }else {
      const response = await register(newUser);
      if (response !== "ok") {
        //SHOW error message as alert
        console.log(response);
        setError(response);
      } else {
        //SHOW successful registration
        console.log("User registered");
        setSuccess("You have registered successfully. Click on Login now!");
      }
    }
  }

  return (
    <React.Fragment>
      <form style={{ marginTop: "10px" }}>
        <Grid alignItems="center" container direction="column">
          <Box textAlign="center" md={8} style={{ margin: "10px 0px" }}>
            {error ? <Alert severity="warning">{error}</Alert> : null}
            {success ? <Alert severity="success">{success}</Alert> : null}
          </Box>
          <p style={{ width: "400px", margin: "0px", color: "#898989" }}>
            * Required
          </p>
          <TextField
            label="Name *"
            variant="filled"
            id="name"
            onChange={handleChange}
            className={styles.textField}
          />
          <TextField
            label="Email *"
            variant="filled"
            id="email"
            onChange={handleChange}
            className={styles.textField}
          />
          <TextField
            label="Contact number *"
            variant="filled"
            id="phone"
            inputProps={{
              maxLength: 10,
            }}
            onChange={handleChange}
            className={styles.textField}
          />
          <TextField
            label="New password *"
            variant="filled"
            type="password"
            id="password"
            onChange={handleChange}
            className={styles.textField}
          />
          <Box textAlign="center" md={8}>
            <Button onClick={handleSubmit} className={styles.signInBtn}>
              SIGN UP
            </Button>
          </Box>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default SignupForm;

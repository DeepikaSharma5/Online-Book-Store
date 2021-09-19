import React, { useState } from "react";
import {
  Grid,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import styles from "./Personaldetails.module.scss";
import { questionIcon } from "../../../assets/images";
import { getUserByID, updatePassword } from "../../../services/userService";
import bcrypt from "bcryptjs";
import jwt_decode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: "center",
    justifyContent: "center",
    width: "53%",
    display: "block",
    margin: "60px auto",
  },
  paper: {
    backgroundColor: "#f9f9f9",
    outline: "none",
    borderRadius: "15px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ChangePasswordModal = ({ currentpassword }) => {
  const [password, setPassword] = useState({
    current: "",
    new: "",
    newRenter: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleFieldChange = (e) => {
    setPassword((current) => {
      return {
        ...current,
        [e.target.id]: e.target.value,
      };
    });
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setPassword({
      current: "",
      new: "",
      newRenter: "",
    });
    setOpen(false);
  };

  const getCurrentPassword = async () => {
    const userToken = localStorage.getItem("user-token");

    if (userToken != null) {
      const decodedToken = jwt_decode(userToken, { complete: true });
      const response = await getUserByID(decodedToken.id);

      if (response._id !== null) {
        return {
          password: response.password,
          id: decodedToken.id
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  const handleSubmit = async () => {
    setSuccess("");
    setError("");
    if (
      password.current === "" ||
      password.new === "" ||
      password.newRenter === ""
    ) {
      setError("Please enter all required fields.");
      setTimeout(() => setError(""), 4000);
    } else if (password.new !== password.newRenter) {
      setError("The new passwords do not match.");
      setTimeout(() => setError(""), 4000);
    } else {
      let userId;
      //Checking if current passwords match
      const currentuserpwd = await getCurrentPassword();

      if (currentuserpwd.password) {
        //Check for errors in mismatching current password
        const passwordsMatch = await bcrypt.compare(
          password.current,
          currentuserpwd.password
        );

        if (passwordsMatch) {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password.new, salt);
          const newPassword = {
            id: currentuserpwd.id,
            password: hashedPassword,
          };

          const response = await updatePassword(newPassword);

          if (response === "ok") {
            console.log(newPassword);
            setSuccess("Password updated successfully!");
            setTimeout(() => {
              setSuccess("");
              handleClose();
            }, 2000);
          } else {
            setError("Error updating password, please try logging in again.");
            setTimeout(() => {
              setError("");
              handleClose();
            }, 2500);
          }
        } else {
          setError("Incorrect password entered as current password.");
        }
      } else {
        setError("Error retrieving data");
      }

      //Check for errors in mismatching current password
    }
  };

  return (
    <React.Fragment>
      <Button className={styles.signInBtn} onClick={handleOpen}>
        CHANGE PASSWORD
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container direction="row">
              <img
                src={questionIcon}
                style={{ marginRight: "20px", height: "100px", width: "100px" }}
              />
              <div style={{ marginTop: "30px" }}>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ paddingBottom: "10px" }}
                >
                  Changing your password
                </Typography>
                <div>
                  <Typography className={styles.descText}>
                    Please enter your previous password and a new password to
                    continue.
                  </Typography>
                  <Grid item container style={{ width: "250px" }}>
                    <TextField
                      className={styles.modalTextField}
                      id="current"
                      type="password"
                      label="Current password"
                      value={password.current}
                      onChange={handleFieldChange}
                      variant="filled"
                    />
                    <TextField
                      className={styles.modalTextField}
                      id="new"
                      type="password"
                      label="New password"
                      value={password.new}
                      onChange={handleFieldChange}
                      variant="filled"
                    />
                    <TextField
                      className={styles.modalTextField}
                      id="newRenter"
                      type="password"
                      label="Re-enter new password"
                      value={password.newRenter}
                      onChange={handleFieldChange}
                      variant="filled"
                    />
                  </Grid>
                  <div style={{ marginTop: "10px" }}>
                    {success ? (
                      <Alert severity="success">{success}</Alert>
                    ) : null}
                    {error ? <Alert severity="warning">{error}</Alert> : null}
                  </div>
                  <Button
                    className={styles.signInBtn}
                    style={{ marginTop: "15px" }}
                    onClick={handleSubmit}
                  >
                    Change Password
                  </Button>
                  <Button
                    className={styles.cancel}
                    style={{ marginTop: "15px" }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
};

export default ChangePasswordModal;

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
import { dangerIcon } from "../../../assets/images";

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

const DeleteAccountModal = () => {
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleFieldChange = (e) => {
    setPassword(e.target.value);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setPassword("");
    setOpen(false);
  };

  const handleSubmit = () => {
    setSuccess("");
    setError("");
    if (password === "") {
      setError("Please enter your current password to proceed.");
      setTimeout(() => setError(""), 3000);
    } else {
      //POST

      //Check for errors in mismatching current password

      //if All good set success
      setSuccess("Account deleted successfully");
      setTimeout(() => setSuccess(""), 2000);

      //Else set error
      // setError("Password entered is incorrect.");
      // setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <React.Fragment>
      <Button className={styles.deleteAcc} onClick={handleOpen}>
        DELETE ACCOUNT
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
                src={dangerIcon}
                style={{ marginRight: "20px", height: "100px", width: "100px" }}
              />
              <div style={{ marginTop: "30px" }}>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ paddingBottom: "10px", fontWeight:"500" }}
                >
                  DELETE your account?
                </Typography>
                <div>
                  <Typography className={styles.descText}>
                    This deletes your account and all data related to it including :
                    <br />
                    <span style={{fontWeight: "600"}}>
                      Delivery details <br/>
                      Currently pending orders <br />
                      Your wish list items
                    </span>
                  </Typography>
                  <Typography className={styles.descText} style={{marginTop:"10px"}}>Enter your current password to proceed.</Typography>
                    <TextField
                      className={styles.modalTextField}
                      id="password"
                      type="password"
                      label="Current password"
                      value={password}
                      onChange={handleFieldChange}
                      variant="outlined"
                    />
                  <Typography className={styles.descText} style={{marginTop:"10px"}}>
                    <span style={{fontWeight: "600"}}>
                      NOTE : This action cannot be undone.
                    </span>
                  </Typography>
                  <div style={{marginTop:"10px"}}>
                  {success ? <Alert severity="success">{success}</Alert> : null}
                  {error ? <Alert severity="warning">{error}</Alert> : null}
                  </div>
                  <Button
                    className={styles.deleteAcc}
                    style={{ marginTop: "15px" }}
                    onClick={handleSubmit}
                  >
                    DELETE my account
                  </Button>
                  <Button
                    className={styles.canceldanger}
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

export default DeleteAccountModal;

import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import styles from "./Personaldetails.module.scss";

const PersonalInfoForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: "Nipuni Fernando",
    email: "nipuni@gmail.com",
    contactNum: "0718829934",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [disableFields, setDisableFields] = useState(true);
  const [currentDetails, setCurrentDetails] = useState(personalDetails);

  const editDetails = () => {
    setCurrentDetails(personalDetails);
    setDisableFields(false);
  };

  const resetDetails = () => {
    setPersonalDetails(currentDetails);
    setDisableFields(true);
  };

  const handleFieldChange = (e) => {
    setPersonalDetails((current) => {
      return {
        ...current,
        [e.target.id]: e.target.value,
      };
    });
  };

  const submitDetails = () => {
    if (
      personalDetails.name === "" ||
      personalDetails.email === "" ||
      personalDetails.contactNum === ""
    ) {
      setSuccess("");
      setError("Please enter all required fields");
      setTimeout(() => setError(""), 3000);
    } else {
      setError("");
      setSuccess("Details updated successfully");
      setTimeout(() => setSuccess(""), 3000);
    }

    //POST
    console.log(personalDetails);

    setDisableFields(true);
  };

  return (
    <React.Fragment>
      <form>
        <Grid container direction="column" spacing={1}>
          <Grid item container direction="row">
            <Grid item md={2} container alignItems="center">
              <Typography className={styles.label}>Name</Typography>
            </Grid>
            <Grid item md={3}>
              <TextField
                className={styles.txtfield}
                disabled={disableFields}
                id="name"
                value={personalDetails.name}
                onChange={handleFieldChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item md={2} container alignItems="center">
              <Typography className={styles.label}>Email</Typography>
            </Grid>
            <Grid item md={3}>
              <TextField
                className={styles.txtfield}
                disabled={disableFields}
                id="email"
                value={personalDetails.email}
                onChange={handleFieldChange}
                variant="outlined"
              />
            </Grid>
            <Grid item alignItems="flex-end">
              {success ? <Alert severity="success">{success}</Alert> : null}
              {error ? <Alert severity="warning">{error}</Alert> : null}
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item md={2} container alignItems="center">
              <Typography className={styles.label}>Contact Number</Typography>
            </Grid>
            <Grid item md={3}>
              <TextField
                className={styles.txtfield}
                disabled={disableFields}
                id="contactNum"
                inputProps={{
                  maxLength: 10,
                }}
                value={personalDetails.contactNum}
                onChange={handleFieldChange}
                variant="outlined"
                className={styles.txtfield}
              />
            </Grid>
          </Grid>
            <Grid md={5}>
              <Button
                className={styles.signInBtn}
                onClick={disableFields ? editDetails : resetDetails}
              >
                {disableFields ? "EDIT DETAILS" : "CANCEL"}
              </Button>
              {!disableFields ? (
                <Button className={styles.signInBtn} onClick={submitDetails}>
                  UPDATE DETAILS
                </Button>
              ) : null}
            </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default PersonalInfoForm;

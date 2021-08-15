import React, { useState } from "react";
import { Grid, Card, Typography, Button } from "@material-ui/core";

import styles from "./PersonalDetails.module.scss";
import { AppLayout, PersonalInfoForm } from "../../components";

const PersonalDetails = () => {

  const openDeleteModal = () => {
    //Open modal
  }

  const openPasswordModal = () => {
    //Open modal
  }
  
  return (
    <React.Fragment>
      <AppLayout componentTitle="Personal Information">
        <Grid
          container
          className="content-padding"
          className={styles.background}
        >
          <Grid item xs={12}>
            <Card variant="outlined" className={styles.card}>
              <Typography
                variant="h5"
                component="h2"
                style={{ paddingBottom: "20px" }}
              >
                Personal Information
              </Typography>
              <PersonalInfoForm />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined" className={styles.card}>
              <Typography
                variant="h5"
                component="h2"
                style={{ paddingBottom: "20px" }}
              >
                Change Password
              </Typography>
              <Typography className={styles.label}>
                Update your password by entering your current password and a new
                password.
              </Typography>
              <Button className={styles.changePwd} onClick={openPasswordModal}>
                CHANGE PASSWORD
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined" className={styles.card}>
              <Typography
                variant="h5"
                component="h2"
                style={{ paddingBottom: "20px" }}
              >
                Delete Account
              </Typography>
              <Typography className={styles.label}>
                Remove your account and all details associated with it.{" "}
                <span style={{ fontWeight: 600 }}>
                  This action is irreversible.
                </span>
              </Typography>
              <Button className={styles.deleteAcc} onClick={openDeleteModal}>
                DELETE ACCOUNT
              </Button>
            </Card>
          </Grid>
        </Grid>
      </AppLayout>
    </React.Fragment>
  );
};

export default PersonalDetails;

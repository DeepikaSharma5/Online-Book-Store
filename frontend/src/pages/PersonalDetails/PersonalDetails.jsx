import React, { useEffect, useState } from "react";
import { Grid, Card, Typography, Button } from "@material-ui/core";

import styles from "./PersonalDetails.module.scss";
import { AppLayout, ChangePasswordModal, DeleteAccountModal, PersonalInfoForm } from "../../components";

const PersonalDetails = () => {

  return (
    <React.Fragment>
      <AppLayout>
        <Grid
          container
          className="content-padding"
          className={styles.background}
          style={{marginTop:"70px"}}
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
              <div style={{marginTop: "10px"}}>
              <ChangePasswordModal />
              </div>
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
              <div style={{marginTop: "10px"}}>
              <DeleteAccountModal />
              </div>
            </Card>
          </Grid>
        </Grid>
      </AppLayout>
    </React.Fragment>
  );
};

export default PersonalDetails;

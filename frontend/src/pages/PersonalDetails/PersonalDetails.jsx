import React, { useState } from "react";
import { Button, Grid, Box } from "@material-ui/core";

import { AppLayout, PersonalInfoForm } from "../../components";

const PersonalDetails = () => {
  return (
    <React.Fragment>
      <AppLayout componentTitle="Personal Information">
      <Grid container direction="row" className="content-padding">
        <PersonalInfoForm />
      </Grid>
      </AppLayout>
    </React.Fragment>
  );
};

export default PersonalDetails;

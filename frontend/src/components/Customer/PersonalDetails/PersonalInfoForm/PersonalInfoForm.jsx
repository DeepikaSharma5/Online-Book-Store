import React, { useState } from "react";
import { Grid, TextField, Box, Button } from "@material-ui/core";

const PersonalInfoForm = () => {
  return (
    <React.Fragment>
      <form style={{ marginTop: "70px" }}>
        <Grid alignItems="center" container direction="column">
          <TextField
            label="Name"
            variant="outlined"
          />
          <TextField
            label="Email"
            variant="outlined"
          />
          <TextField
            label="Contact Number"
            variant="outlined"
          />
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default PersonalInfoForm;

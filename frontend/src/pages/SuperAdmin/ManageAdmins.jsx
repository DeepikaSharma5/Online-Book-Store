import React, { useState } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";

import styles from "../WishList/WishList.module.scss";

import {
  AdminAddModal,
  AdminTable,
  AppLayout,
  WishListTable,
} from "../../components";
import AppBar from "../../components/Admin/NavBar/AppBar";
import NavBar from "../../components/Admin/NavBar/NavBar";

const ManageAdmins = () => {
  const [newAdmin, setNewAdmin] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "Deepika",
      email: "deepika123@gmail.com",
      isActive: 1,
    },
    {
      id: 2,
      name: "Sithpavan",
      email: "sithpavan@gmail.com",
      isActive: 0,
    },
    {
      id: 3,
      name: "Kajan",
      email: "kajan@gmail.com",
      isActive: 1,
    },
  ]);

  const handleFieldChange = (e) => {
    setNewAdmin((currentDetails) => {
      return {
        ...currentDetails,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <React.Fragment>
      <AppBar />
      <Grid container direction="row">
        <Grid item sm={2}>
        <NavBar />
        </Grid>
        <Grid
          item
          sm={10}
          container
          className="content-padding"
          className={styles.background}
          style={{height: "89.8vh", marginTop:"10.2vh"}}
        >
          <Grid
            item
            sm={3}
            xs={12}
            style={{ marginTop: "30px", borderRight: "1px solid #c8c6c6", paddingLeft:"20px" }}
          >
            <Typography
              variant="h5"
              component="h2"
              style={{ fontWeight: "600" }}
            >
              Add an administrator
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#5b5b5b", padding: "30px 0px 20px 0px" }}
            >
              An administrator can view and edit all content in this system.
            </Typography>
            <TextField
              id="email"
              value={newAdmin.email}
              onChange={handleFieldChange}
              variant="filled"
              label="Admin email"
              style={{ backgroundColor: "#ffffff", width: "90%" }}
            />
            <TextField
              id="name"
              value={newAdmin.name}
              onChange={handleFieldChange}
              variant="filled"
              label="Admin name"
              style={{
                backgroundColor: "#ffffff",
                width: "90%",
                marginTop: "10px",
              }}
            />
            <TextField
              id="password"
              value={newAdmin.password}
              onChange={handleFieldChange}
              variant="filled"
              label="New password for admin"
              style={{
                backgroundColor: "#ffffff",
                width: "90%",
                marginTop: "10px",
              }}
            />
            <AdminAddModal admin={newAdmin} clearAdmin={setNewAdmin} />
          </Grid>
          <Grid
            item
            sm={9}
            xs={12}
            style={{ marginTop: "30px", paddingLeft: "50px" }}
          >
            <Typography
              variant="h5"
              component="h2"
              style={{ color: "#474747", paddingBottom: "30px" }}
            >
              Currently authorized administrators
            </Typography>
            <AdminTable adminList={admins} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ManageAdmins;

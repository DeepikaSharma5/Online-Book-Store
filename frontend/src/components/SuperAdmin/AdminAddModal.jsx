import React from "react";
import {
  Typography,
  Switch,
  Fade,
  Grid,
  Backdrop,
  Modal,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { StyledTableCell, StyledTableRow } from "../../assets/theme/theme";
import { dangerIcon } from "../../assets/images";

import styles from "./AdminTable.module.scss";

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

const AdminAddModal = ({ admin }) => {
  const [open, setOpen] = React.useState(false);

  const [password, setPassword] = React.useState("");

  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  const handleOpen = () => {
    setError(null);
    setSuccess(null);
    if ((admin.email === "") | (admin.name === "") | (admin.password === "")) {
      setError("Please all required fields");
      setTimeout(() => setError(null), 4000);
    } else if (!admin.email.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g)) {
      setError("Please enter a valid email");
      setTimeout(() => setError(null), 4000);
    } else {
      //Add
      //setError OR setSuccess

      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addAdmin = () => {
    if (password === "") {
      setError("Please enter password to proceed");
    } else {
      //check password match
      // if correct pwd
      //POST to add admin
      const newAdmin = {
        name: admin.name,
        email: admin.email,
        password: admin.password,
        isActive: 1,
      };

      //If no errors in POSt

      setSuccess("Admin added successfully");
      setTimeout(() => {
        setSuccess(null);
        setOpen(false);
      }, 2000);

      //else show error
      // setError("Error adding admin")
      // setTimeout(() => setError(null), 3000)
    }
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Button
        className={styles.searchbtn}
        style={{ margin: "20px 0px", width: "90%" }}
        onClick={handleOpen}
      >
        Add administrator
      </Button>
      {error ? <Alert severity="warning" style={{border: "1px solid #f5d872", width:"90%"}}>{error}</Alert> : null}
      {success ? <Alert severity="success" style={{border: "1px solid #74c274", width:"90%"}}>{success}</Alert> : null}
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
                style={{
                  marginRight: "20px",
                  height: "100px",
                  width: "100px",
                }}
              />
              <div
                style={{
                  margin: "30px 0px 0px 30px",
                  width: "500px",
                }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ paddingBottom: "10px", fontWeight: "500" }}
                >
                  Add this administrator?
                </Typography>
                <div>
                  <Typography className={styles.descText} style={{marginBottom: "10px"}}>
                    <span style={{ fontWeight: "600", fontSize: "20px" }}>
                      {admin.name + " - " + admin.email}
                    </span>
                    <br />
                    This admin will{" "}
                    <span style={{ fontWeight: "600" }}>
                      gain priviledges to add and update this site and its
                      content
                    </span>{" "}
                    until deactivated.
                  </Typography>
                  <TextField
                  style={{width: "300px"}}
                    id="password"
                    type="password"
                    label="Current super admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="filled"
                  />
                  <br />
                  <div style={{margin: "10px 0px"}}>
                  {success ? <Alert severity="success">{success}</Alert> : null}
                  {error ? <Alert severity="warning">{error}</Alert> : null}
                  </div>
                  <Button
                    className={styles.deleteAcc}
                    style={{ marginTop: "15px" }}
                    onClick={addAdmin}
                  >
                    Add admin
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

export default AdminAddModal;

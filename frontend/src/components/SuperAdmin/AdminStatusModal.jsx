import React from "react";
import {
  Typography,
  Switch,
  Fade,
  Grid,
  Backdrop,
  Modal,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { StyledTableCell, StyledTableRow } from "../../assets/theme/theme";
import { dangerIcon } from "../../assets/images";

import styles from "./AdminTable.module.scss";
import { updateAdminStatus } from "../../services/adminService";

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

const AdminStatusModal = ({ adminId, adminName, isActive, getAdmins }) => {

  const [open, setOpen] = React.useState(false);

  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  const [isActivated, setIsActivated] = React.useState(isActive === 1 ? true : false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function updateStatus(adminInfo) {
    const response = await updateAdminStatus(adminInfo);

    if (response) {
      return true
    } else {
      return false;
    }
  }

  const setEnable = () => {
    //UPDATE api to enable admin
    updateStatus({
      "id":adminId,
      "status":!isActivated
    }).then((updated) => {
      if(updated){
        setIsActivated(!isActivated);
        getAdmins();
        console.log("Status of admin ", adminId, " is ", !isActivated);
        setSuccess("Admin status updated successfully")
        setTimeout(() => {
            setSuccess(null)
            setOpen(false)
        }, 2000)
      }
    })


    //else show error
    // setError("Error updating admin status")
    // setTimeout(() => setError(null), 3000)
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Switch
        color="primary"
        checked={isActivated}
        id="isActivated"
        onChange={handleOpen}
      />
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
                  {isActivated ? "Deactivate admin?" : "Activate admin?"}
                </Typography>
                <div>
                  <Typography className={styles.descText}>
                    <span style={{ fontWeight: "600", fontSize: "25px" }}>
                      {adminName}
                    </span>
                    <br />
                    {isActivated
                      ? "This admin will lose authorization to add or update any site content until activated again."
                      : "This admin WILL BE AUTHORIZED to add or update any site content until deactivated."}
                  </Typography>
                  {success ? <Alert severity="success">{success}</Alert> : null}
                  {error ? <Alert severity="warning">{error}</Alert> : null}
                  <Button
                    className={styles.deleteAcc}
                    style={{ marginTop: "15px" }}
                    onClick={setEnable}
                  >
                    {isActivated ? "deactivate" : "activate"} admin
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

export default AdminStatusModal;

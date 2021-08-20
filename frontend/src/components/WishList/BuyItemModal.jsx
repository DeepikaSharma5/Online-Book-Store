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

import styles from "../Customer/PersonalDetails/Personaldetails.module.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    display: "block",
    margin: "100px auto",
  },
  paper: {
    backgroundColor: "#f9f9f9",
    outline: "none",
    borderRadius: "15px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const BuyItemModal = ({ buy, itemId, name, price, author, imgSrc }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    buy(itemId);
  };

  return (
    <React.Fragment>
      <div className={styles.signInBtn} style={{cursor:"pointer", fontWeight: "300"}} onClick={handleOpen}>
        Add to cart
      </div>
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
              <div style={{ marginTop: "10px" }}>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ paddingBottom: "20px", fontWeight: "500" }}
                >
                  Buy this item from this wish list?
                </Typography>
                <div>
                  <Grid container direction="row" spacing={3}>
                    <Grid item>
                      <div style={{ width: "100px", height: "130px", backgroundColor: "grey" }} />
                    </Grid>
                    <Grid item>
                      <Typography className={styles.descText2}>
                        {name}
                      </Typography>
                      <Typography className={styles.descText}>
                        {author}
                      </Typography>
                      <Typography className={styles.descText2}>
                        Rs. {price}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Button
                    className={styles.signInBtn}
                    style={{ marginTop: "25px" }}
                    onClick={handleSubmit}
                  >
                    Buy Item
                  </Button>
                  <Button
                    className={styles.cancel}
                    style={{ marginTop: "25px" }}
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

export default BuyItemModal;

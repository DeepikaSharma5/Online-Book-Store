import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  Modal,
  Backdrop,
  Fade,
  makeStyles,
} from "@material-ui/core";

import styles from "./WishList.module.scss";
import { dangerIcon, okIcon } from "../../assets/images";

import { AppLayout, AWishListItemCard } from "../../components";
import SearchSelect from "react-select";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    display: "block",
    margin: "120px auto",
  },
  paper: {
    backgroundColor: "#f9f9f9",
    outline: "none",
    borderRadius: "15px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const WishList = (props) => {
  const wishList = [
    {
      id: 1,
      name: "Star Talk",
      author: "author1",
      price: 6000,
      isBought: 0,
      itemsInStock: 12
    },
    {
      id: 2,
      name: "Ulimate Visual Dictionary",
      author: "author1",
      price: 6000,
      isBought: 1,
      itemsInStock: 12
    },
    {
      id: 4,
      name: "The Dog Book",
      author: "author1",
      price: 6000,
      isBought: 0,
      itemsInStock: 12
    },
    {
      id: 5,
      name: "CATS 101",
      author: "author1",
      price: 6000,
      isBought: 0,
      itemsInStock: 0
    },
    {
      id: 6,
      name: "Read me a story",
      author: "author1",
      price: 6000,
      isBought: 0,
      itemsInStock: 12
    },
    {
      id: 7,
      name: "Stay close",
      author: "author1",
      price: 6000,
      isBought: 0,
      itemsInStock: 12
    },
  ];

  const classes = useStyles();

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  return (
    <React.Fragment>
      <AppLayout>
        <div style={{ margin: "10px 25px" }}>
          <Typography className={styles.pageHeading}>{props.match.params.fname+" "+props.match.params.lname}'s Wish List</Typography>
          <Divider style={{ margin: "20px 0px 30px 0px", width: "100%"}} />
          <div style={{ margin: "0px 30px" }}>
            <Grid container spacing={3}>
              {wishList.map((wishItem) => (
                <Grid item xs={3}>
                  < AWishListItemCard
                    itemId={wishItem.id}
                    name={wishItem.name}
                    author={wishItem.author}
                    price={wishItem.price}
                    buyItem={() => {}}
                    isBought={wishItem.isBought}
                    itemsInStock={wishItem.itemsInStock}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openSuccess}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openSuccess}>
            <div className={classes.paper}>
              <Grid container direction="row">
                <img
                  src={okIcon}
                  style={{
                    marginRight: "20px",
                    height: "100px",
                    width: "100px",
                  }}
                />
                <Typography
                  className={styles.descText}
                  style={{ marginTop: "35px" }}
                >
                  Item successfully removed from wish list.
                </Typography>
              </Grid>
            </div>
          </Fade>
        </Modal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openFail}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openFail}>
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
                <Typography
                  className={styles.descText}
                  style={{ marginTop: "20px", width:"300px" }}
                >
                  Sorry, there was an error when removing this item.<br />
                  Please try again.
                </Typography>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </AppLayout>
    </React.Fragment>
  );
};

export default WishList;

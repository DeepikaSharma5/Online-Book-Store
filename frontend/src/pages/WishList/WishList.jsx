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
import { Alert } from "@material-ui/lab";

import { AppLayout, AWishListItemCard } from "../../components";

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
      author: "National Geographic",
      price: 6000,
      isBought: 0,
      itemsInStock: 12
    },
    {
      id: 2,
      name: "Ulimate Visual Dictionary",
      author: "DK books",
      price: 6000,
      isBought: 1,
      itemsInStock: 12
    },
    {
      id: 4,
      name: "The Dog Book",
      author: "Parragon",
      price: 6000,
      isBought: 0,
      itemsInStock: 12
    },
    {
      id: 5,
      name: "CATS 101",
      author: "DK books",
      price: 6000,
      isBought: 0,
      itemsInStock: 0
    },
    {
      id: 6,
      name: "Read me a story",
      author: "Pi Kids",
      price: 6000,
      isBought: 0,
      itemsInStock: 12
    },
    {
      id: 7,
      name: "Stay close",
      author: "Harlen Coben",
      price: 6000,
      isBought: 0,
      itemsInStock: 12
    },
  ];

  const classes = useStyles();
  const [success, setSuccess] = React.useState(null);

  return (
    <React.Fragment>
      <AppLayout>
        <div style={{ margin: "10px 25px" }}>
          <Typography className={styles.pageHeading}>{props.match.params.fname+" "+props.match.params.lname}'s Wish List</Typography>
          <Divider style={{ margin: "20px 0px 30px 0px", width: "100%"}} />
          
          <div style={{ margin: "0px 30px" }}>
          {success ? <Alert severity="success" style={{marginBottom: "10px"}}>{success}</Alert> : null}
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
                    setSuccess={setSuccess}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </AppLayout>
    </React.Fragment>
  );
};

export default WishList;

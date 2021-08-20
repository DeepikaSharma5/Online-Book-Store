import React, { useState } from "react";
import { Grid, Card, Typography, Button } from "@material-ui/core";

import styles from "./WishItemCard.module.scss";
import BuyItemModal from "./BuyItemModal";

const AWishListItemCard = ({
  itemId,
  name,
  author,
  price,
  buyItem,
  isBought,
  itemsInStock,
  setSuccess 
}) => {
  return (
    <Card style={{ padding: "25px 20px" }} variant="outlined">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ height: "100px", width: "130px", backgroundColor: "grey" }}
        ></div>
      </div>
      <Typography className={styles.mainText}>{name}</Typography>
      <p className={styles.subText}>{author}</p>
      <p className={styles.subText}>Rs. {price}</p>
      {isBought ? (
        <div className={styles.bought}>BOUGHT</div>
      ) : itemsInStock === 0 ? (
        <div className={styles.outOfStock}>OUT OF STOCK</div>
      ) : (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <BuyItemModal
            buy={buyItem}
            name={name}
            author={author}
            price={price}
            itemId={itemId}
            imgSrc={""}
            setSuccess={setSuccess}
          />
        </div>
      )}
    </Card>
  );
};

export default AWishListItemCard;

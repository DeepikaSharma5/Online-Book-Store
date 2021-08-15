import React, { useState } from "react";
import { Grid, Card, Typography, Button } from "@material-ui/core";

import styles from "./WishItemCard.module.scss";

const WishItemCard = ({ itemId, name, author, price, removeItem }) => {
  return (
    <Card style={{ padding: "25px 20px" }} variant="outlined">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ height: "100px", width: "130px", backgroundColor: "grey" }}
        ></div>
      </div>
      <Typography
           className={styles.mainText}>{name}</Typography>
      <p className={styles.subText}>{author}</p>
      <p className={styles.subText}>Rs. {price}</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className={styles.removeBtn} onClick={() => removeItem(itemId)}>
              Remove from list
          </div>
      </div>
    </Card>
  );
};

export default WishItemCard;

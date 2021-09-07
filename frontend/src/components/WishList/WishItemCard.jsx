import React, { useState } from "react";
import { Grid, Card, Typography, Button } from "@material-ui/core";

import styles from "./WishItemCard.module.scss";
import RemoveItemModal from "./RemoveItemModal";

const WishItemCard = ({ itemId, name, author, price, publisher, removeItem }) => {
  return (
    <Card style={{ padding: "25px 20px" }} variant="outlined">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ height: "100px", width: "130px", backgroundColor: "grey" }}
        ></div>
      </div>
      <Typography
           className={styles.mainText}>{name}</Typography>
      <p className={styles.subText}>by {author}</p>
      <p className={styles.subText2}>{publisher}</p>
      <p className={styles.subText} style={{fontStyle:"normal"}}>Rs. {price}</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <RemoveItemModal remove={removeItem} name={name} author={author} price={price} publisher={publisher} itemId={itemId} imgSrc={""} />
      </div>
    </Card>
  );
};

export default WishItemCard;

import React, { useState } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";

import styles from "./WishList.module.scss";

import { AppLayout, WishListTable } from "../../components";

const SearchWishList = () => {
  const [ownerName, setOwnerName] = useState("");

  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Sayuni Perera",
      location: "Colombo",
    },
    {
      id: 2,
      name: "Sayuni Fernando",
      location: "Galle",
    },
    {
      id: 3,
      name: "Sayuni Nugawela",
      location: "Kandy",
    },
  ]);

  return (
    <React.Fragment>
      <AppLayout>
        <Grid
          container
          className="content-padding"
          className={styles.background}
          style={{ height: "92vh" }}
        >
          <Grid
            item
            sm={3}
            xs={12}
            style={{ marginTop: "30px", borderRight: "1px solid #c8c6c6" }}
          >
            <Typography
              variant="h5"
              component="h2"
              style={{ fontWeight: "600" }}
            >
              Find a wish list
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#5b5b5b", padding: "30px 0px 20px 0px" }}
            >
              Get the perfect present by buying an item from a wish list!
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "#505050",
                paddingBottom: "10px",
                fontWeight: "bold",
              }}
            >
              List owner name
            </Typography>
            <TextField
              className={styles.modalTextField}
              id="ownerName"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              variant="outlined"
              style={{ backgroundColor: "#ffffff", width: "90%" }}
            />
            <Button
              className={styles.searchbtn}
              style={{ margin: "20px 0px", width: "90%" }}
            >
              Search for list
            </Button>
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
              Search results
            </Typography>
            <WishListTable resultList={searchResults} />
          </Grid>
        </Grid>
      </AppLayout>
    </React.Fragment>
  );
};

export default SearchWishList;

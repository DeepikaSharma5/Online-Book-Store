import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  Button,
  Divider,
  TextField,
} from "@material-ui/core";

import styles from "./WishList.module.scss";
import {
  AppLayout,
  ChangePasswordModal,
  DeleteAccountModal,
  PersonalInfoForm,
} from "../../components";
import SearchSelect from "react-select";
import { Autocomplete } from "@material-ui/lab";

const WishList = () => {
  const bookList = [
    {
      value: 1,
      label: "Star Talk",
      author: "author1",
      price: 6000,
    },
    {
      value: 2,
      label: "Ulimate Visual Dictionary",
      author: "author1",
      price: 6000,
    },
    {
      value: 3,
      label: "The Mentor",
      author: "author1",
      price: 6000,
    },
    {
      value: 4,
      label: "The Dog Book",
      author: "author1",
      price: 6000,
    },
    {
      value: 5,
      label: "CATS 101",
      author: "author1",
      price: 6000,
    },
    {
      value: 6,
      label: "Read me a story",
      author: "author1",
      price: 6000,
    },
    {
      value: 7,
      label: "Stay close",
      author: "author1",
      price: 6000,
    },
  ];

  const [bookToAdd, setBookToAdd] = useState("");

  const formatOptionLabel = ({ label, author, price }) => (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>{label}</div>
      <div style={{ height: "70px", width: "30px", backgroundColor: "grey" }} />
    </div>
  );

  const selectBook = (event, value) => {
    setBookToAdd(value.label);
  };

  return (
    <React.Fragment>
      <AppLayout>
        <div style={{margin: "10px 15px"}}>
        <Typography
          variant="h5"
          component="h2"
          style={{ paddingBottom: "20px" }}
        >
          My Wish List
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-around"}}>
          <Grid container direction="row">
            {/* <Grid item xs={3}>
            <SearchSelect
              placeholder="Search for a book"
              formatOptionLabel={formatOptionLabel}
              options={bookList}
              isSearchable={true}
            />
            </Grid> */}
            <Autocomplete
              id="book-select"
              options={bookList}
              getOptionLabel={(option) => option.label}
              onChange={selectBook}
              disableClearable
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search for a book"
                  variant="outlined"
                  style={{ padding: "0px" }}
                />
              )}
              style={{ width: "200px" }}
            />
            <Button className={styles.searchbtn}>Add to list</Button>
          </Grid>
          <div style={{ backgroundColor: "green" }}>Toggle</div>
        </div>
        <Divider style={{ margin: "20px 0px 30px 0px", width: "100%" }} />
        </div>
      </AppLayout>
    </React.Fragment>
  );
};

export default WishList;

import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField
} from "@material-ui/core";

import styles from "./WishList.module.scss";

import {
  AppLayout,
  ChangePasswordModal,
  DeleteAccountModal,
  PersonalInfoForm,
  VisibilityModal,
  WishItemCard,
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

  const wishList = [
    {
      value: 1,
      label: "10,000 Years of Art",
      author: "author1",
      price: 5500,
    },
    {
      value: 2,
      label: "Classic ghost Stories",
      author: "author1",
      price: 6000,
    },
    {
      value: 3,
      label: "Light and Architecture",
      author: "author1",
      price: 7000,
    },
  ];

  const [bookToAdd, setBookToAdd] = useState("");

  const [isPublic, setIsPublic] = useState(true)

  const formatOptionLabel = ({ label, author, price }) => (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>{label}</div>
      <div style={{ height: "70px", width: "30px", backgroundColor: "grey" }} />
    </div>
  );

  const selectBook = (event, value) => {
    setBookToAdd(value.label);
  };

  const addBook = () => {
    //POST
  };

  const removeListItem = (itemId) => {
    alert("Removed item " + itemId);
  };

  return (
    <React.Fragment>
      <AppLayout>
        <div style={{ margin: "10px 25px" }}>
          <Typography className={styles.pageHeading}>My Wish List</Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
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
              <Button className={styles.searchbtn} onClick={addBook}>
                Add to list
              </Button>
            </Grid>
            <div style={{width:"230px"}}>
            <VisibilityModal isPublic={isPublic} setIsPublic={setIsPublic} />
            </div>
          </div>
          <Divider style={{ margin: "20px 0px 30px 0px", width: "100%" }} />
          <div style={{ margin: "0px 30px" }}>
            <Grid container spacing={3}>
              {wishList.map((wishItem) => (
                <Grid item xs={3}>
                  <WishItemCard
                    itemId={wishItem.value}
                    name={wishItem.label}
                    author={wishItem.author}
                    price={wishItem.price}
                    removeItem={removeListItem}
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

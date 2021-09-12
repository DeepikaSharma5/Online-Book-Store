import React, { useState, useEffect } from "react";
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
import { uuid } from "uuidv4";

import styles from "./WishList.module.scss";
import { dangerIcon, okIcon } from "../../assets/images";

import { AppLayout, VisibilityModal, WishItemCard } from "../../components";
import SearchSelect from "react-select";
import { Autocomplete } from "@material-ui/lab";
import { addItemToList, getWishListByID } from "../../services/wishlistService";
import { getBooks } from "../../services/bookService";
import jwt_decode from "jwt-decode";

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

const MyWishList = () => {
  const [bookList, setBookList] = useState([]);

  const [wishList, setWishList] = useState([]);

  const classes = useStyles();

  const [bookToAdd, setBookToAdd] = useState();

  const [isPublic, setIsPublic] = useState(true);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const [defaultBook, setDefaultBook] = useState(uuid());

  const formatOptionLabel = ({ title, author_name, price }) => (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <p>{title}</p>
        <p style={{ fontStyle: "italic", color: "grey" }}>{author_name}</p>
      </div>
      <div>Rs.{price}</div>
    </div>
  );

  const selectBook = (event, value) => {
    console.log(value)
    if (value) setBookToAdd(value);
  };

  async function getBookList() {
    const response = await getBooks();
    setBookList(response.data);
    console.log("books", response.data);
  }

  async function getListItems() {
    const userToken = localStorage.getItem("user-token");

    if (userToken != null) {
      const decodedToken = jwt_decode(userToken, { complete: true });
      const response = await getWishListByID(decodedToken.id);

      if (response._id !== null) {
        setWishList(response.items);
        setIsPublic(!response.isPrivate);
      } else {
        console.log(response);
      }
    } else {
      //setError("Error loading details");
      console.log("ERROR loading details");
    }
  }

  async function  addBook(){
    if (bookToAdd.title !== "") {
      const book = {
        bookID:bookToAdd._id,
        title:bookToAdd.title,
        author:bookToAdd.author_name,
        isbn:bookToAdd.isbn,
        publisher:bookToAdd.publisher,
        price:bookToAdd.price,
        image:bookToAdd.image,
        isBought:false
      }

      const userToken = localStorage.getItem("user-token");

      if (userToken != null) {
        const decodedToken = jwt_decode(userToken, { complete: true });
        const response = await addItemToList(book, decodedToken.id);
  
        if (response === "ok") {
          setDefaultBook(uuid());
          setWishList((current) => {
            return [
              ...current,
              bookToAdd
            ];
          });
        } else {
          console.log(response);
        }
      } else {
        //setError("Error loading details");
        console.log("ERROR saving to list");
      }
    }
    getBookList();
  };

  const removeListItem = (itemId) => {
    //Send DELETE req
    setTimeout(() => {
      setWishList([]);

      //If all ok
      setOpenSuccess(true);
      setTimeout(() => setOpenSuccess(false), 1500);
    }, 1000);

    //If error
    // setOpenFail(true);
    // setTimeout(() => setOpenFail(false), 2500);
  };

  useEffect(() => {
    getListItems();
    getBookList();
  }, []);

  return (
    <React.Fragment>
      <AppLayout>
        <div style={{ margin: "80px 25px", minHeight: "74vh" }}>
          <Typography className={styles.pageHeading}>My Wish List</Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Grid container direction="row">
              {/* <Grid item xs={3}>
            <SearchSelect
              placeholder="Search for a book"
              formatOptionLabel={formatOptionLabel}
              options={bookList}
              isSearchable={true}
              isClearable={true}
              onChange={selectBook}
            />
            </Grid> */}
              <Autocomplete
                key={defaultBook}
                id="book-select"
                options={bookList}
                getOptionLabel={(option) => option.title}
                onChange={selectBook}
                disableClearable
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search for a book"
                    variant="filled"
                    style={{ padding: "0px" }}
                  />
                )}
                style={{ width: "400px" }}
              />
              <Button className={styles.searchbtn} onClick={addBook}>
                Add to list
              </Button>
            </Grid>
            <div style={{ width: "230px" }}>
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
                    name={wishItem.title}
                    author={wishItem.author}
                    publisher={wishItem.publisher}
                    price={wishItem.price}
                    removeItem={removeListItem}
                    imgSrc={wishItem.image}
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
                  style={{ marginTop: "20px", width: "300px" }}
                >
                  Sorry, there was an error when removing this item.
                  <br />
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

export default MyWishList;

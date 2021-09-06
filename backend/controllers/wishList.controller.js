const WishList = require("../models/wishList.model");
const WishListItem = require("../models/wishItem.model");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const createWishList = async (req, res) => {
  if (req.body) {
    const newList = new WishList({
      _id: req.body.userid,
      owner: req.body.userid,
      isPrivate: true,
      items: [],
    });

    await newList
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getWishListItems = async (req, res) => {
  if (req.params && req.params.id) {
    await WishList.findById(req.params.id)
      .populate("items", "bookID title author isbn publisher isBought isPrivate")
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const addItemToWishList = async (req, res) => {
  if (req.body && req.params && req.params.id) {
    let wishItem = req.body;
    let day = new Date()
    day.setTime(day.getTime() - new Date().getTimezoneOffset() * 60 * 1000)
    wishItem["addedDate"] = day;
    const newItem = new WishListItem(wishItem);

    await newItem
      .save()
      .then((data) => {
        const wishListID = req.params.id;
        const wishItemID = data._id;
        addProductToWishList(wishListID, wishItemID);
        console.log("Product added successfully");
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const addProductToWishList = async (listID, itemID) => {
  console.log("List ID: ", listID);
  await WishList.findByIdAndUpdate(
    listID,
    { $push: { items: itemID } },
    { new: true, useFindAndModify: false }
  );
};

module.exports = {
  createWishList,
  addItemToWishList,
  getWishListItems,
};

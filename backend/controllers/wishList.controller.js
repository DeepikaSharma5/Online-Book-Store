const WishListItem = require("../models/wishItem.model");
const User = require("../models/user.model");
const Book = require("../models/Book");

const getWishListItems = async (req, res) => {
  if (req.params && req.params.id) {
    await User.findById(req.params.id)
      .populate(
        "items",
        "bookID title author price isbn publisher image isBought isPrivate"
      )
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const searchWishList = async (req, res) => {
  if (req.params && req.params.name) {
    await User.find(
      { isPrivate: false, name: { $regex: req.params.name } },
      { _id: 1, name: 1 }
    )
      .then((data) => {
        res.status(200).send({ lists: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const addWishListItem = async (req, res) => {
  if (req.body && req.params && req.params.id) {
    let wishItem = req.body;
    let day = new Date();
    day.setTime(day.getTime() - new Date().getTimezoneOffset() * 60 * 1000);
    wishItem["addedDate"] = day;
    const newItem = new WishListItem(wishItem);

    await newItem
      .save()
      .then((data) => {
        const wishListID = req.params.id;
        const wishItemID = data._id;
        addProductToWishList(wishListID, wishItemID);
        console.log("Product " + wishItemID + " added successfully");
        res.status(200).send({ data: wishItemID });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const addProductToWishList = async (listID, itemID) => {
  //console.log("List ID: ", listID);
  await User.findByIdAndUpdate(
    listID,
    { $push: { items: itemID } },
    { new: true, useFindAndModify: false }
  );
};

const deleteWishListItem = async (req, res) => {
  if (req.params && req.params.listid && req.params.itemid) {
    await WishListItem.deleteOne({ _id: req.params.itemid })
      .then((data) => {
        const listID = req.params.listid;
        const itemID = req.params.itemid;
        deleteProductFromWishList(listID, itemID);
        console.log("Product deleted successfully");
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const deleteProductFromWishList = async (listID, itemID) => {
  await User.findByIdAndUpdate(
    listID,
    { $pull: { items: itemID } },
    { new: true, useFindAndModify: false }
  );
};

const updateisPrivate = async (req, res) => {
  if (req.params && req.params.listid && req.params.liststate) {
    await User.findByIdAndUpdate(
      req.params.listid,
      { isPrivate: req.params.liststate },
      { new: true, useFindAndModify: false }
    )
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

//NOT RETURNING ANYTHING
const getTopFiveProducts = async (req, res) => {
  await WishListItem.aggregate([
    {
      $group: {
        _id: "$bookID",
        counter: {
          $sum: 1,
        },
      }
      
    },
    {
      $lookup: {
        from: 'books',
        localField: '_id',
        foreignField: '_id',
        as: 'bookinfo'
      }
    },
    {
      $unwind: "$bookinfo"
    },
    {
      $sort: {"counter": -1}
    }
  ])
  .then(async(data) => {    
      res.status(200).send(data);
  })
  .catch((error) => {
    res.status(500).send({ error: error.message });
  });
};

module.exports = {
  addWishListItem,
  deleteWishListItem,
  getWishListItems,
  updateisPrivate,
  searchWishList,
  getTopFiveProducts,
};

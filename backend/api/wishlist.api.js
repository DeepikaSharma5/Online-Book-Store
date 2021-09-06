const express = require("express");
const router = express.Router();
const wishlistcontroller = require("../controllers/wishList.controller");

//Add proper routing nouns
module.exports = () => {
    router.post('/new', wishlistcontroller.createWishList);
    router.post('/:id', wishlistcontroller.addItemToWishList);
    router.get('/:id', wishlistcontroller.getWishListItems);
    return router;
}
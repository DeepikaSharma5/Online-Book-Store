const express = require("express");
const router = express.Router();
const wishlistcontroller = require("../controllers/wishList.controller");

//Add proper routing nouns
module.exports = () => {
    router.post('/:id', wishlistcontroller.addWishListItem);
    router.get('/:id', wishlistcontroller.getWishListItems);
    router.get('/search/:name', wishlistcontroller.searchWishList);
    router.delete('/:listid/:itemid', wishlistcontroller.deleteWishListItem);
    router.put('/:listid/:liststate', wishlistcontroller.updateisPrivate);
    router.get('/top/wish/items', wishlistcontroller.getTopFiveProducts);
    return router;
}
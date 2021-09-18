const express = require("express");
const router = express.Router();
const wishlistcontroller = require("../controllers/wishList.controller");
const verifyAdmin = require("../routers/verifyTokenAdmin")

//Add proper routing nouns
module.exports = () => {
    router.post('/:id', wishlistcontroller.addWishListItem);
    router.get('/:id', wishlistcontroller.getWishListItems);
    router.get('/search/:name', wishlistcontroller.searchWishList);
    router.delete('/:listid/:itemid', wishlistcontroller.deleteWishListItem);
    router.put('/:listid/:liststate', wishlistcontroller.updateisPrivate);
    router.get('/top/wish/items', verifyAdmin, wishlistcontroller.getTopFiveProducts);
    router.get('/report/:month/:year', verifyAdmin, wishlistcontroller.genarateReport);
    return router;
}
const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/user.controller");
const verifyBuyer = require("../routers/verifyTokenBuyer");

//Add proper routing nouns
module.exports = () => {
    router.post('/register', usercontroller.createUser);
    router.post('/login', usercontroller.loginUser);
    router.get('/:id', verifyBuyer, usercontroller.getUser);
    router.put('/', verifyBuyer, usercontroller.updateUser);
    router.patch('/', verifyBuyer, usercontroller.updatePassword);
    router.delete('/:id', verifyBuyer, usercontroller.deleteUserAccount);
    return router;
}
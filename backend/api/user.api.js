const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/user.controller");

//Add proper routing nouns
module.exports = () => {
    router.post('/register', usercontroller.createUser);
    router.post('/login', usercontroller.loginUser);
    return router;
}
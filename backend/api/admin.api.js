const express = require("express");
const router = express.Router();
const admincontroller = require("../controllers/admin.controller");
const verifySuperAdmin = require("../routers/verifyTokenSuperAdmin")

//Add proper routing nouns
module.exports = () => {
    router.post('/new-admin', verifySuperAdmin, admincontroller.createAdmin);
    router.post('/login', admincontroller.loginAdmin);
    router.get('/all-admins', verifySuperAdmin, admincontroller.getAllAdmins);
    router.patch('/', verifySuperAdmin, admincontroller.updateAdminStatus);
    return router;
}
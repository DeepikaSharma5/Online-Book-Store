const mongoose = require('mongoose')

// For STATUS , Super admin: 2, Active admin: 1, Disabled: 0

const admin = new mongoose.Schema({
    name: {type: String,required: true, trim: true},
    email: {type: String,required: true, trim: true, min:6},
    password: {type: String,required: true, trim: true},
    status: { type: Number, required: true},
})

//Registering DB
const Admin = mongoose.model('admins',admin);

module.exports = Admin;
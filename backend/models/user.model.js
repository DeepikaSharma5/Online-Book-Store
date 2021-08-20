const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String,required: true, trim: true},
    email: {type: String,required: true, trim: true, min:6},
    phone: {type: String,required: true, trim: true, max: 10},
    password: {type: String,required: true, trim: true}
})

//Registering DB
const User = mongoose.model('users',userSchema);

module.exports = User;
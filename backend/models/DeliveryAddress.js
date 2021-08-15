const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DeliveryAddressSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      address1: {
        type: String,
        required: true,
      },
      address2: {
        type: String,
        required: true,
      },
      address3: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
  
  const Delivery_Address_Schema = mongoose.model("Delivery_Address_Schema",DeliveryAddressSchema)
  module.exports = Delivery_Address_Schema
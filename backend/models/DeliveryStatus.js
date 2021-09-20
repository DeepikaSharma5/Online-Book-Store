const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DeliveryStatusSchema = new Schema(
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
      statuss: {
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
  
  const Delivery_Status_Schema = mongoose.model("Delivery_Status_Schema",DeliveryStatusSchema)
  module.exports = Delivery_Status_Schema
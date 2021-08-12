const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PrivatePolicySchema = new Schema(
    {
      heading: {
        type: String,
        required: true,
      },
      details: {
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
  
  const Private_Policy_Schema = mongoose.model("Private_Policy_Schema",PrivatePolicySchema)
  module.exports = Private_Policy_Schema
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TeamDetailsSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      image: {
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
  
  const Team_Details_Schema = mongoose.model("Team_Details_Schema",TeamDetailsSchema)
  module.exports = Team_Details_Schema

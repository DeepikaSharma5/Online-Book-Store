const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AboutUsSchema = new Schema(
    {
      mission: {
        type: String,
        required: true,
      },
      missionInfo: {
        type: String,
        required: true,
      },
      customerService: {
        type: String,
        required: true,
      },
      convenience: {
        type: String,
        required: true,
      },
      choice: {
        type: String,
        required: true,
      },
      story1: {
        type: String,
        required: true,
      },
      story2: {
        type: String,
        required: true,
      },
      story3: {
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
  
  const About_Us_Schema = mongoose.model("About_Us_Schema",AboutUsSchema)
  module.exports = About_Us_Schema
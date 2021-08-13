const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TermsAndConditionsSchema = new Schema(
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
  
  const Terms_And_Conditions_Schema = mongoose.model("Terms_And_Conditions_Schema",TermsAndConditionsSchema)
  module.exports = Terms_And_Conditions_Schema
const mongoose = require("mongoose");

const CardDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    card_number: { type: Number, required: true },
    cvc: { type: String, required: true },
    expiry_date: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("carddetails", CardDetailsSchema);

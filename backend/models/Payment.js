const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    books: [
      { type: mongoose.Schema.Types.ObjectId, required: false, ref: "books" },
    ],
    quantity: { type: String, required: true },
    status: { type: String, required: true },
    total: { type: String, required: true },

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

module.exports = mongoose.model("payment", PaymentSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      author_name: {
        type: String,
        required: true,
      },
      publisher: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
      isbn: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
      categories: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'categories' }]
    });
  
  const Book = mongoose.model('books',BookSchema);
  module.exports = Book;
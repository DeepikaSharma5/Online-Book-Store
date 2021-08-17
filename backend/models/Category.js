const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
      category_name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      books: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'books' }]
    }
  );
  
  const Category = mongoose.model('categories',CategorySchema);
  module.exports = Category;
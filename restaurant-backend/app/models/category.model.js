const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  category_name: String,
});

const categoryModel = mongoose.model("categories", schema);

module.exports = categoryModel;

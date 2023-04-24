const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id_category: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
});

const menuItemsModel = mongoose.model("menuItem", schema);
module.exports = menuItemsModel;

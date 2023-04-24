const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.category = require("./category.model");
db.menuItem = require("./menuItem.model");

module.exports = db;

const mongoose = require("mongoose");

const schema = mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
});
const MobileData = mongoose.model("mobile", schema);
module.exports = MobileData;

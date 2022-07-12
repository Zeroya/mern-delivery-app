const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DeliverySchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  shop: String,
  photo: String
});

const UserSchema = new Schema({
  city: String,
  delivery: Array,
  email: String,
  name: String,
  state: String,
  surName: String,
  zip: Number,
});

const UsersDase = mongoose.model("UserBase", UserSchema);
const Delivery = mongoose.model("Delivery3", DeliverySchema);

module.exports = {UsersDase,Delivery};

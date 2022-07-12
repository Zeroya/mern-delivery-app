const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
//const foodArray = require('./foodArray');
// const Delivery = require("./module/delivery");

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require("./routes/api");

mongoose.connect("mongodb+srv://Zeroya:Qazwsxqazwsx@cluster0.kf5fj.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (!err) {
    console.log("all okeeey");
  } else {
    console.log(err);
  }

});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// foodArray.forEach(food => {
//   const newFood = new Delivery({
//     id: food.id,
//     name: food.name,
//     price: food.price,
//     shop: food.shop,
//     photo: food.photo
//   });
//   // newFood.save()
// });


app.use(cors());
app.use(morgan('tiny'));
app.use('/', routes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));
}

app.listen(PORT, () => { console.log(`all right  ${PORT}`) })
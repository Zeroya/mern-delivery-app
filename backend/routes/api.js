const express = require("express");
const router = express.Router();
const {UsersDase,Delivery} = require("../models/delivery");


router.get('/api', (req, res) => {

  Delivery.find({})
    .then(items => {
      res.json(items)
    })
    .catch((err) => {
      console.log('Error', err);

    })
});

router.post('/save', (req, res) => {
  console.log("Name :", req.body)
  const data = req.body;

  const newUser = new UsersDase(data);

  newUser.save((error) => {
    if(error){
      res.status(500).json({ message:'sorry, internal server errors'})
    } else {
      res.json({
        message:"Your data has been saved!!"
      })
    }
  })

});


// router.get('/sqqsqsqs' , (req, res) => {
//   Delivery.find({}).then(items => res.json(items).catch((err) => console.log(err))
//   );
// });

// router.get('/api/name', (req, res) => {
//   const data = {
//     username: "hyhyhsgfsdafwerasdd",
//     age: 123123
//   }
//   res.json(data);
// });

module.exports = router;
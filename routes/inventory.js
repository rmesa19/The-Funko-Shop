var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Item = require('../models/Item');

//gets all items in inventory
router.get('/', async function(req, res) {
    try{
      const item = await Item.find();
      
      res.status(200).json(item);
    }catch(err){
      res.status(500).json(err);
    }
});
  
router.post('/add', async (req, res)=>{
  try{
      

      const newItem = new Item({
          name: req.body.name,
          description: req.body.description,
          number: req.body.number,
          link: req.body.link,
          image: req.body.image,
          category: req.body.category
      })

      const item = await newItem.save();
      res.status(200).json("New item Added to Inventory");
  }catch(err){
      res.status(500).json(err);
      
  }
})


router.post('/addToCollection', async (req, res)=>{
  try{
      

      const newItem = new Item({
          handle: req.body.handle,
          title: req.body.title,
          imageName: req.body.imageName,
          series: req.body.series
      })

      const item = await newItem.save();
      res.status(200).json("New item Added to Inventory");
  }catch(err){
      res.status(500).json(err);
      
  }
})


//Adds owners to item
router.put("/:id", async (req, res) => {

  try{
      if(req.body.loggedIn){
      try {
      const item = await Item.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("New Item Added to Collection");
      } catch (err) {
        res.status(500).json(err);
      }
    }else{
      res.status(401).json("You can only be logged in to add to your collection");
    }
  }catch(err){
    res.status(500).json(err);
  }
});

//get all items with user in owned array
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let items;
    items = await Item.find({
      owned: {
        $in: [username],
      },
    });
    res.status(200).json(items);
    
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
  
var express = require('express');
var router = express.Router();
var User = require('../models/User')
//Update User
router.put('/:id', async function(req, res) {
  
  try{
    const user = await User.findbyId(req.params.id);
    if(req.body.userId === req.params.id){
      try{
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
              $set: req.body,
            },
            {new:true}
            );
          res.status(200).json(updatedUser)
      }catch(err){
        res.status(500),json(err)
      }


    }
    res.status(200).json(user);
  }catch(err){
    res.status(500).json(err);
  }
});


module.exports = router;

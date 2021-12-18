const router = require("express").Router();
const User = require("../models/User");


//Register User
router.post('/register', async (req, res)=>{
    try{

        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        const user = await newUser.save();
        res.status(200).json("User Successfully Registered");
    }catch(err){
        res.status(500).json("Email and Username already in use");
        
    }
})

//User login
router.post('/login', async (req,res)=> {
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json('incorrect username')


        if(req.body.password.localeCompare(user.password) != 0){
            res.status(400).json('incorrect password')
            console.log(req.body.password)
            console.log(user.password)

        }

        const{password, ...others} = user._doc;
        res.status(200).json(others);

    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
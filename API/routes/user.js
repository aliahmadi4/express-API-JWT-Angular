const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/',async (req,res)=>{
    const users = await User.find();
    res.json(users)
})

router.post('/signup', async (req,res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const user1 = await user.save();
    res.json(user1);
})

module.exports = router;
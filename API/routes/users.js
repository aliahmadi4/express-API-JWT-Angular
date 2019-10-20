const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const key = require('../utils/key');


router.get('/',async (req,res)=>{
    const users = await User.find();
    res.json(users)
})

router.post('/signup', async (req,res)=>{
    try{
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        const user1 = await user.save();
        jwt.sign({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, key.key,(err,data)=>{
            // if(err) return next(err);
            res.header('jwt', data);
            res.json(user1);
        })
        
    }catch(err){
        res.json(err);
    }
})


module.exports = router;
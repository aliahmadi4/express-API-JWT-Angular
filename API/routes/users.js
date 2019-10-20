const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const key = require('../utils/key');
const bcrypt = require('bcrypt');

router.get('/',async (req,res)=>{
    const users = await User.find();
    res.json(users)
})

router.post('/signup', async (req,res)=>{
    try{
        const hash = await bcrypt.hash(req.body.password, 10);
        
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        const user1 = await user.save();
        jwt.sign({
            name: req.body.name,
            email: req.body.email,
            password: hash
        }, key.key,(err,data)=>{
            if(err) throw err;
            res.header('jwt', data);
            res.json(user1);
        })
        
    }catch(err){
        res.json(err);
    }
})




module.exports = router;
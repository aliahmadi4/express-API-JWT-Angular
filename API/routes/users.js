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
        res.json({msg: "You are registered!"})
        
    }catch(err){
        res.json({err});
    }
})

router.post('/login', async (req,res)=>{
    console.log(`${req.body.email}  ${req.body.password}`)
    if(!req.body.email || !req.body.password){
        res.json({msg: "please provide email & password"});
    }
    try{
        const hash = await bcrypt.hash(req.body.password,10);
        const user = await User.findOne({email: req.body.email}).exec();
        const result = await bcrypt.compare(req.body.password, user.password)
        if(result){
            jwt.sign({
                name: user.name,
                email: user.email,
                password: user.password
            }, key.key, (err,data)=>{
                if(err) throw err;
                res.header('jwt', data);
                res.json(user);
            })
        }else{
            res.json({msg: "email or password does not match!"})
        }
        
    }catch(err){
        throw err;
    }
    
    
})


module.exports = router;
const express = require('express');
const router = express.Router();
const verifyTokenMdlwr = require('../utils/verifyTokenMdlwr');

router.get('/protected', verifyTokenMdlwr ,(req,res)=>{
    res.json({msg:"you now access to secret route"})
})


module.exports = router;
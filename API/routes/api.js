const express = require('express');
const router = express.Router();
const verifyTokenMdlwr = require('../utils/verifyTokenMdlwr');

router.get('/protected', verifyTokenMdlwr ,(req,res)=>{
    res.json({hey:"hey"})
})


module.exports = router;
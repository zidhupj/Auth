const express = require('express');
const router = express.Router();
const verify = require('./verifyToken')

router.use(express.json());



router.get("/",verify,(req,res)=>{
    console.log('Requested data is being sent to the user...');
    res.send(req.user);
})

module.exports = router;
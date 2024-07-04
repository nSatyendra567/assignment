const express = require('express');
const { Login, SignUp, register } = require('../Controllers/Login');
const { dashboard } = require('../Controllers/Dashboard');
const { Authorization } = require('../middleware/AuthnOath');
const { auth } = require('../middleware/auth');
const { Isadmin } = require('../Controllers/Isadmin');
const router=express.Router();

router.get('/test', (req,res)=>{
    res.send("testing")
})
router.post("/login",Login)
router.post("/signup",Authorization,Isadmin,SignUp)
router.post("/dashboard",Authorization,Isadmin,dashboard)
router.post("/auth",auth)
router.post("/register",Authorization,Isadmin,register)


module.exports=router;
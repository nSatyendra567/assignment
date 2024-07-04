const User = require("../Models/User");
const bcrypt=require("bcrypt")
const jwt =require('jsonwebtoken');
const Shop = require("../Models/Shop");

exports.Login=async(req,res)=>{
    try {
        const{email,password}=req.body;
        console.log("att", req.body)
        if (!email || !password) {
            return res.status(404).json({
                message:"please fill all the fields"
            })
        }
        let Isuser= await User.findOne({email})
        console.log("sucess",Isuser);
        if (!Isuser) {
            return res.status(400).json({
                sucess:false,
                message:"No User found"
            })
        }
        if(await bcrypt.compare(password,Isuser.password)){
            Isuser.password=undefined
            const payload={
                email:Isuser.email,
                role:Isuser.role,
                id:Isuser._id
            }
            let token=jwt.sign(payload,"SECRECT",{expiresIn:"2h"});
            return res.cookie("token",token,{expires:new Date(Date.now()+3*24*60*60*1000),httpOnly:true}).status(200).json({
                token:token,
                sucess:true,
                message:"ok",
                user:Isuser
            })
        }else{
            return res.status(403).json({
                sucess:false,
                message:"invelid password",
            })
        }
    } catch (e) {
        console.error(e);
        return res.status(404).json({
            sucess:false,
            message:"Some thing went wrong ! Try after some time"
        })
    }
}


exports.SignUp=async(req,res)=>{
    try {
        console.log("inside", req.body);
        const {name,email,password,role}=req.body;
        console.log(req.body);
        const isavl=await User.findOne({email})
        if (isavl) {
            return res.status(404).json({
            message: "email allready exits"
            })
        }
        let hashedpass;
        try {
            hashedpass=await bcrypt.hash(password,10)
        } catch (e) {
            console.error(e);
            return res.status(404).json({
                message:"try after some time err in hashing",
                error:e
            })
        }

        const result=await User.create({
            name,email,password:hashedpass,role
        })

        res.status(200).json({
            message:"Done",
            result:result
        })

    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message:"err in all"
        })
    }

}

exports.register=async(req,res)=>{
    try {
      const { name,email,password, shopname, address,rating } = req.body;
      console.log(req.body);
      const isavl=await User.findOne({email})
        if (isavl) {
            return res.status(404).json({
            message: "email allready exits"
            })
        }
        let hashedpass;
        try {
            hashedpass=await bcrypt.hash(password,10)
        } catch (e) {
            console.error(e);
            return res.status(404).json({
                message:"try after some time err in hashing",
                error:e
            })
        }

  
      const newUser = new User({
        name,
        email,
        password:hashedpass,
        address,
        role:"Shopkeeper"
      });
  
      const user = await newUser.save();
  
      // Create the store
      const newStore = new Shop({
        shopname,
        address,
        owner: user._id,
        rating
      });
  
      const store = await newStore.save();
      const Upadteduser=await User.findByIdAndUpdate(user._id,{$push:{shop:store._id}} , {new:true})
                            .populate('shop');

  
      res.status(201).json({ Upadteduser, store });
    } catch (error) {
      res.status(500).json({ message: 'Error creating store owner and store', error });
    }
}
const jwt=require("jsonwebtoken");
require("dotenv").config();

exports.Authorization=async(req,res,next)=>{
    try {
        const token=req.body.token || req.headers.authorization.split(" ")[1];
        console.log(req.headers.authorization.split(" ")[1]);
        if (!token) {
            return res.status(400).json({
            message:"Invalid token"
            })
        }
        try {
            const decode=jwt.verify(token,"SECRECT");
            console.log(decode);
            console.log("Verified ✔️");
            req.user=decode;
            next();
        } catch (err) {
            console.log(err);
            res.status(401).json({
                message:"error in verification",
                error:err.message
            })
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message:"server error"
        })
    }
}
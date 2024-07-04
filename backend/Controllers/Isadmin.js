const jwt=require('jsonwebtoken') ;

exports.Isadmin=async(req,res,next)=>{
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
            if(decode.role==="Admin"){
                console.log("Verified ✔️ ", "Wellcome Admin");
                next();
            }
            else
            return res.status(400).json({
                message:"you are not authorized to use this route"
            })
        } catch (err) {
            console.log(err);

            res.status(401).json({
                message:"error in verification"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message:"server error"
        })
    }
}
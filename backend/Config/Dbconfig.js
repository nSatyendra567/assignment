const mongoose=require('mongoose');
require('dotenv').config();

exports.DbConnect=async()=>{
    console.log("trying to connect");
    try {
        mongoose.connect(process.env.DBURL)
        .then(()=>console.log("Sucessfull"))
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
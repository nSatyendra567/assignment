const express = require('express');
const { DbConnect } = require('./Config/Dbconfig');
const cros =require('cors')
const router = require('./routes/route');
require('dotenv').config();

const app=express();
app.use(express.json());
DbConnect();
app.use(cros());

app.get('/',(req,res)=>{
    res.send(`<h1>hello </h1>`)
})
app.use(router)



app.listen(process.env.PORT||3001,()=>{
    console.log(`app started at port ${process.env.PORT}`);
})
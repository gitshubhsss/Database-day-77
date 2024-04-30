const express=require("express");

const app=express();

const port=8080;

app.listen(port,(req,res)=>{
    console.log(`app is listening on the port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("hellow this is my first website");
})
const express=require("express");

const app=express();

const port=8080;

app.set("view engine","views");

app.listen(port,(req,res)=>{
    console.log(`app is listening on the port ${port}`);
})

app.get("/ketaki",(jreq,res)=>{
    res.render("index.ejs");
})
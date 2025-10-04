// import express from 'express'; // express ejs ko internally bydefault require/import kar leta hai
// import path from "path";

const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/home", (req, res)=>{
    res.render("home.ejs");
});

app.get("/rolldice", (req, res)=>{
    let num = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs", {num});
});

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
});

app.listen(port, ()=>{
    console.log(`Listining port: ${port}`);
});
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./expressError.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
    .then(() => console.log("Connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/FakeWhatsapp');
}

// All chats
app.get("/chats", async(req, res) => {
    try{
        let chats = await Chat.find();
        res.render("chat.ejs", {chats});
    }
    catch(err){
        next(err);
    }
});

// writing new chat details
app.get("/chats/new", async(req, res) => {
    // throw new ExpressError(404, "Page not Found");
    res.render("new.ejs");
});

//add new chat
app.post("/chats", async(req, res, next) => {
    try{
        let {from, to, msg} = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            createdAt: new Date()
        });
        await newChat.save();
        res.redirect("/chats");
    }
    catch(err){
        next(err);
    }
});

// show route
app.get("/chats/:id", async(req, res, next) => {
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        // if(!chat){
        //     throw new ExpressError(404, "Chat not Found");
        // }
        res.render("edit.ejs", {chat});
    }catch(err){
        next(err);
    }
});

// editin chat
app.get("/chats/:id/edit", async(req, res) => {
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat});
    }catch(err){
        next(err);
    }
});

// update chat
app.post("/chats/:id", async(req, res) => {
    try{
        let {id} = req.params;
        let {msg : newMsg} = req.body;
        await Chat.findByIdAndUpdate(id, 
            {msg: newMsg}, 
            {runValidators: true, new: true}
        );
    res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

// delete chat
app.delete("/chats/:id", async(req, res) => {
    try{
        let {id} = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

app.get("/", (req, res) => {
    res.send("working root");
});

// error handling middleware
app.use((err, req, res, next) =>{
    let {status=500, message="Some Error Occured"} = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("listening on port 8080 : ");
});
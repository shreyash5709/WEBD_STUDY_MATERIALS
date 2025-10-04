const express = require("express");
const app = express();

let port = 8080;
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});

// app.use((req, res)=>{
//     console.log("New incoming request");
//     res.send("This is a basic response.")
// });

app.get("/", (req, res)=>{
    res.send("you contacted root path");
});

app.get("/apple", (req, res)=>{
    res.send("you contacted apple path");
});

app.get("/orange", (req, res)=>{
    res.send("you contacted orange path");
});

app.get("/search", (req, res)=>{
    let {q} = req.query;
    res.send(`<h1>these are the resutl for query: ${q}.</h1>`);
});

app.get(/.*/, (req, res)=>{
    res.send("This path doesn't exist.");
});
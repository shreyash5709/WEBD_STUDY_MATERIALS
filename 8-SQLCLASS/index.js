const {faker, tr} = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true})); 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Ansh#2022",
});

const geteRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

// showing the user count in home page
app.get("/", (req, res)=>{
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q, (err, result) =>{
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", {count});
        });
    }catch(err){
        console.log("Error : ", err);
        res.send("Some error in DB.")
    }
});

// showing all the user in database
app.get("/user", (req, res)=>{
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, users) =>{
            if(err) throw err;
            res.render("users.ejs", {users});
        });
    }catch(err){
        console.log("Error : ", err);
        res.send("Some error in DB.")
    }
});

//  edit username
app.get("/user/:id/edit", (req, res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, result) =>{
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", {user});
        });
    }catch(err){
        console.log("Error : ", err);
        res.send("Some error in DB.")
    }
});

// updating the username
app.patch("/user/:id", (req, res)=>{
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, result) =>{
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("WRONG password!");
            }
            else{
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }catch(err){
        console.log("Error : ", err);
        res.send("Some error in DB.")
    }
});

// filling newuser details
app.get("/user/new", (req, res) => {
    res.render("new.ejs");
});

// adding new users on the list of all users
app.post("/user/new", (req, res) =>{
    let{username, email, password} = req.body;
    let id = uuidv4();
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            res.redirect("/user");
        });
    }
    catch(err){
        console.log("Error : ", err);
        res.send("Some error in DB.")
    }
});

// filling user details to be deleted
app.get("/user/:id/delete", (req, res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, result) =>{
            if(err) throw err;
            let user = result[0];
            res.render("delete.ejs", {user});
        });
    }catch(err){
        console.log("Error : ", err);
        res.send("Some error in DB.")
    }
});

//deleting user 
app.delete("/user/:id/", (req, res)=>{
    let {id} = req.params;
    let {password: formPass, email: formEmail} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, result) =>{
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password && formEmail != user.email){
                res.send("WRONG email or password! ");
            }
            else{
                let q2 = `DELETE FROM user WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }catch(err){
        console.log("Error : ", err);
        res.send("Some error in DB.")
    }
});

app.listen("8080", ()=>{
    console.log("server listening on port 8080");
});

// try{
//     connection.query(q, [data], (err, result) =>{
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log("Error : ", err);
// }

// connection.end();
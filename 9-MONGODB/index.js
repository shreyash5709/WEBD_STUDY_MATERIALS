const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// let user1 = new User({
//     name: "Adam",
//     email: "adam@gmail.com",
//     age: 19,
// });
// user1.save();

// User.insertMany([
//     {name: "Amit", email: "amit@gmail.com", age: 20},
//     {name: "Suman", email: "suman@gmail.com", age: 18},
//     {name: "Rahul", email: "rahul@gmail.com", age: 19},
// ])
// .then((res) => {
//     console.log(res);
// });

User.deleteOne({name: "Adam"})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
    .then(() => console.log("Connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

Chat.insertMany([
    {
        from: "Aman",
        to: "Abhay",
        msg: "Hello brother",
        createdAt: new Date()
    },
    {
        from: "Akash",
        to: "Abhay",
        msg: "Kya hal chal bhai",
        createdAt: new Date()
    },
    {
        from: "Kajal",
        to: "Anita",
        msg: "Aur behan kya kar rhi ahi",
        createdAt: new Date()
    },
    {
        from: "Chhotu",
        to: "Brijesh",
        msg: "Hello bhai, ghumne chalega",
        createdAt: new Date()
    },
    {
        from: "Aman",
        to: "Amit",
        msg: "Hii amit, kya hal cahl bhai",
        createdAt: new Date()
    },
    {
        from: "Ankur",
        to: "Anita",
        msg: "Hell anita",
        createdAt: new Date()
    }
]);
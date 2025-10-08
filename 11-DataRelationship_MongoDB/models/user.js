const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main()
    .then(() => console.log("Connection successful."))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    addresses: [{
        _id: false,
        location: String,
        city: String
    }]
});

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User({
        username: "Shreyash",
        addresses: [{
            location: "B3 Orchid Villa",
            city: "Lucknow"
        }]
    });

    user1.addresses.push({
        location: "Ramgarh",
        city: "Sonbhadra"
    });

    let result = await user1.save();
    console.log(result);
} 

addUsers();
const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(() => console.log("Connection successful."))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addOrder = async () =>{
//     let result = await Order.insertMany([
//         {
//             item: "Sandwitch",
//             price: 100
//         },
//         {
//             item: "Cake",
//             price: 200,
//         },
//         {
//             item: "Coke",
//             price: 95
//         }
//     ]);
//     console.log(result);
// }

// addOrder();

const addCustomer = async () => {
    // let cust1 = new Customer({
    //     name: "Shreyash Jaiswal",
    // });
    // let order1 = await Order.findOne({item: "Cake"});
    // let order2 = await Order.findOne({item: "Coke"});
    // cust1.orders.push(order1);
    // cust1.orders.push(order2);

    // let result = await cust1.save();
    let result = await Customer.find({});
    console.log(result);
}

addCustomer();
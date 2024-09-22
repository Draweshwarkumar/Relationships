const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(() =>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
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
        ref: "order",
    },
   ],
});

const order = mongoose.model("order", orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async () =>{
    let cust1 = new Customer({
        name: "Rahul Kumar",
    });

    // let order1 = await order.findOne({item: "Chips"});
    // let order2 = await order.findOne({item: "Chocolate"});

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);

    // let result = await cust1.save();
    // console.log(result);

let result = await Customer.find({});
console.log(result);

};

addCustomer();

const addorders = async () =>{
    let res = await order.insertMany([
        {item: "Samosa", price: 12},
        {item: "Chips", price: 10},
        {item: "Chocolate", price: 40},
    ]);
    console.log(res);
};

addorders();
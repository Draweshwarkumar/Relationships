const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(() =>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false, 
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User",userSchema);

const addUsers = async () =>{
        let user1 = new User({
            username: "Shivam jha",
            addresses:[
               {
                 location: "Dekuli, Laheriasaria",
                city: "Darbhanga",
               },
            ],
        });

        user1.addresses.push({location: "MMDU Mullana",city: "Ambala"});
        let result = await user1.save();
        console.log(result);

    };
    addUsers();

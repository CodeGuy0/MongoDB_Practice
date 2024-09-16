const mongoose = require("mongoose");

main() 
    .then(() =>{
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


// User.deleteMany({age: 55})
// .then((res) => {
//     console.log(res);
// })
// .catch(err=>{
//         console.log(err);
// });

// User.deleteOne({name: "Amir"}).then((res) => {
//     console.log(res);
// })
// .catch(err=>{
//         console.log(err);
// });


// User.updateMany({age: {$gt:48}}, {age:55})
// .then((res) => {
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// });

// User.updateOne({name:"Salman"}, {age:55})
// .then((res) => {
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })


// User.findById("66e6c010953f4331525716bb")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });



// User.insertMany([
//     {name: "SRK", email: "lastofthestars@gmail.com", age: 50},
//     {name: "Salman", email: "thebhai@gmail.com", age: 51},
//     {name: "Amir", email: "pk@gmail.com", age: 50},
// ]).then((res) => {
//     console.log(res);
// });



// const user1 = new User({
//     name: "vijay",
//     email: "thalapathy@gmail.com",
//     age: 50,
// });



// const user2 = new User({
//     name: "dhoni",
//     email: "thala@gmail.com",
//     age: 43,
// });



// user2
//  .save()
//  .then((res) => {
//     console.log(res);
//  })
//  .catch((err) => {
//     console.log(err);
//  });


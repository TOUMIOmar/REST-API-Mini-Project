const mongoose =require('mongoose');


const connectDB = (second) => { 
    mongoose.connect(process.env.MONGO_URL,(err)=>err ? console.log(err) : console.log(`database is connected`));
};


module.exports = connectDB;


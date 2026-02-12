// Database se jab v baat karo async await lagao aur try catch lagana
// Database is always in another continent and kuch v wahan se laane m tym lagta hai from mongoose

// import connectDB from "./db/index.js";
// import 'dotenv/config'; 

// console.log('PORT:', process.env.PORT);
// console.log('MONGODB_URI:', process.env.MONGODB_URI);
// console.log('All env vars:', Object.keys(process.env).filter(key => key.includes('MONGO') || key.includes('PORT')));


import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { config } from "./config.js";

console.log('PORT:', config.PORT);
console.log('MONGODB_URI:', config.MONGODB_URI);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        app.on("error", (error) => {
            console.log("ERR", error);
            throw error
        })
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed!!", err)
})


// this will return a promise also













/*
import express from "express"
const app = express()
// This will lead to immediate running of material
// This is called iffe
( async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR: ",error)
        throw err
    }
})() 
*/
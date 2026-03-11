// import mongoose from "mongoose";
// import { config } from "../config.js";

// import dotenv from 'dotenv';
// dotenv.config();

// console.log('ENV CHECK - MONGODB_URI:', process.env.MONGODB_URI);

// const connectDB = async () => {
//     try{
//         // const connectionInstance = await mongoose.connect(`${config.MONGODB_URI}/${config.DB_NAME}`)
//         const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
//         // const connectionInstance = await mongoose.connect(`${config.MONGODB_URI}/${config.cluster0}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection error ", error);
//         process.exit(1)
//     }
// }

// export default connectDB;


// //process jo haina humare jispe yeh program chal raha hai uska ek reference hai



import mongoose from "mongoose";
import dns from 'dns';
import { DB_NAME } from "../constants.js";

// Use Google's DNS servers for MongoDB resolution
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1)
    }
}

export default connectDB;
import mongoose from "mongoose";
import { config } from "../config.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${config.MONGODB_URI}/${config.DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1)
    }
}

export default connectDB;


//process jo haina humare jispe yeh program chal raha hai uska ek reference hai
import { config } from "dotenv";
import mongoose from "mongoose";

config()
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: "true",
        })
        console.log("[LOG]: Database Connected successfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
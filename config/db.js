import mongoose from 'mongoose';

import dotenv from 'dotenv';


dotenv.config();
export const connectDB = async () => {
    const mongoUrl = process.env.MONGO_URL; 
    await mongoose.connect(mongoUrl)
        .then(() => console.log("DB connected"))
        .catch((error) => console.error("DB connection error:", error));
}

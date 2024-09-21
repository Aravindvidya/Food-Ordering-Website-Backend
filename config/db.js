import mongoose from 'mongoose';

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://aravindpadmam12:gdMsZgMqCXaaWPCe@cluster0.gyd0y.mongodb.net/food-delivery').then(()=>console.log("DB connected"))
}
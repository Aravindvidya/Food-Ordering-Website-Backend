import mongoose from 'mongoose';


export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://aravindpadmam12:jWOxKkIhZMPtvsmB@cluster0.gyd0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("DB connected"))
}


// import dotenv from 'dotenv';


// dotenv.config();
// export const connectDB = async () => {
//     const mongoUrl = process.env.MONGO_URI; 
//     await mongoose.connect(mongoUrl)
//         .then(() => console.log("DB connected"))
//         .catch((error) => console.error("DB connection error:", error));
// }

//await mongoose.connect("mongodb+srv://aravindpadmam12:gdMsZgMqCXaaWPCegdMsZgMqCXaaWPCe@cluster0.gyd0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("DB connected"))
//
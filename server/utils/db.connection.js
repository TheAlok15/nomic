import mongoose from "mongoose";

export const connectDB = async () =>{
  try {
    mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
    
  } catch (error) {
    console.error("Database connection failed", error);
    
  }
}
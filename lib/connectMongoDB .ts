import mongoose from "mongoose";

export default async function connectMongoDB () {
    if (mongoose.connection.readyState === 1) return;

    try {
        await mongoose.connect('mongodb://localhost/mydatabase')
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
    
}
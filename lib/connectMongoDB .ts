import mongoose from "mongoose";

export default async function connectMongoDB () {
    if(mongoose.connections[0].readyState)return

    try {
        await mongoose.connect('mongodb://localhost/mydatabase')
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
    
}
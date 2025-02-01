'use server'
import Posts from "@/models/posts";
import mongoose from "mongoose";

const connectMongoDB = async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect("mongodb://localhost/mydatabase");
};


export default async function postPosts(title:string,content:string){
    await connectMongoDB();
    
    try {
         await Posts.create(({
            title,
            content,
        }));
       

    } catch (error) {
        console.log(error);
    }

    

}

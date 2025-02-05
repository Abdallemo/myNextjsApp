'use server'
import { auth } from "@/auth";
import db from "@/models/drizzle/client.drizle";
import {  PostTable } from "@/models/drizzle/schema";
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
        const  session  = await auth();
        
        await db.insert(PostTable).values({
            authorId:session?.user?.email as string,
            postTitle:title,
            content:content,
            createAt: new Date(),

        })

    } catch (error) {
        console.log(error);
    }

    

}

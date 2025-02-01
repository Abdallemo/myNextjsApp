// lib/getPosts.ts
import connectMongoDB from "./connectMongoDB ";
import Posts from "@/models/posts";
import { Document } from "mongoose";

 interface PostProps  extends Document {
  _id: string;
  title: string;
  content: string;
  like:boolean;
}

export default async function getPosts(): Promise<PostProps[]> {
  await connectMongoDB(); 

  try {
    const posts = await Posts.find().lean<PostProps[]>(); 
    

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

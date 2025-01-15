// lib/getPosts.ts
import connectMongoDB from "./connectMongoDB ";
import Posts from "@/models/posts";
import { Document } from "mongoose";

interface PostProps  extends Document {
  _id: string;
  title: string;
  content: string;
}

export default async function getPosts(): Promise<PostProps[]> {
  await connectMongoDB(); // Ensure database is connected

  try {
    const posts = await Posts.find().lean<PostProps[]>(); 
    // await new Promise((resolve)=> setTimeout(resolve,2000))

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

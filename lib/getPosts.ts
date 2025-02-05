// lib/getPosts.ts
import db from "@/models/drizzle/client.drizle";
import connectMongoDB from "./connectMongoDB ";
import Posts from "@/models/posts";
import { Document } from "mongoose";
import { auth } from "@/auth";

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

    const  session  = await auth();
    console.log('current User_Id :'+session?.user?.email as string)
    const postDrizzle = await db.query.PostTable.findMany({
     with:{
      author:{columns:{name:true}}

     }
    })
    console.log('UserTable Data: \n'+JSON.stringify(postDrizzle))

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

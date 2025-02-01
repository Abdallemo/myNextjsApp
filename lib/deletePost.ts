'use server'

import posts from "@/models/posts";
import connectMongoDB from "./connectMongoDB ";
import { revalidatePath } from "next/cache";

export default async function deletPost(id:string) {

    await connectMongoDB();
    try {
        await posts.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }

    revalidatePath('/posts');
    
}
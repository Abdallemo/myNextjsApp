'use server'
import { auth } from "@/auth";
import db from "@/models/drizzle/client.drizle";
import { PostTable } from "@/models/drizzle/schema";
import { revalidatePath } from "next/cache";
export default async function postPosts(title: string, content: string) {
    try {
        const session = await auth();
        await db.insert(PostTable).values({
            authorId: session?.user?.email as string,
            postTitle: title,
            content: content,
            createAt: new Date(),
        })
        revalidatePath('/posts')
       
    } catch (error) {
        console.log(error);
    }
}

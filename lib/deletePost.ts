'use server'


import { revalidatePath } from "next/cache";
import db from "@/models/drizzle/client.drizle";
import { PostTable } from "@/models/drizzle/schema";
import { eq } from "drizzle-orm";

export default async function deletPost(id: string) {


    try {
        await db.delete(PostTable).where(eq(PostTable.id, id))
    } catch (error) {
        console.log(error);
    }

    revalidatePath('/posts');

}
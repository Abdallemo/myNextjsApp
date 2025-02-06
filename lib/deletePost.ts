'use server'


import { revalidatePath } from "next/cache";
import db from "@/models/drizzle/client.drizle";
import { PostTable } from "@/models/drizzle/schema";
import { eq } from "drizzle-orm";

export default async function deletPost(id: string, postOwner: string) {


    try {
        const isAuthorized = await db.query.PostTable.findFirst({
            where: (table, fn) => fn.eq(table.authorId, postOwner)
        })
        if (isAuthorized) {
            await db.delete(PostTable).where(eq(PostTable.id, id))
            console.log(`deleted the post with id : ${id} and the owner of ${postOwner} `)
            revalidatePath('/path')
            return isAuthorized;

        }else{
            return isAuthorized
        }
    } catch (error) {
        console.log(error);
    }

    revalidatePath('/posts');

}
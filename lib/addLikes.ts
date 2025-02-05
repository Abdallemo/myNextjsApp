'use server'
import db from "@/models/drizzle/client.drizle";
import { PostLikesTable, PostTable } from "@/models/drizzle/schema";
import { and, eq } from "drizzle-orm";

export default async function addlikes(postId: string, userId: string, currentLikeStatus: boolean) {

    try {
        const post = await db.query.PostTable.findFirst({
            where: (table, fn) => fn.eq(PostTable.id, postId),
            with:{author:true,likes:true}

        })
        if (post?.authorId === userId) {
            return
        }
        if (currentLikeStatus) {
            await db.delete(PostLikesTable)
            .where(and(eq(PostLikesTable.postId, postId), eq(PostLikesTable.userId, userId)));
        } else {
            await db.insert(PostLikesTable).values({
                postId: postId,
                userId: userId,
                liked: true
            })
        }

    } catch (error) {
        console.log(error);
        return
    }
}
'use server'
import db from "@/models/drizzle/client.drizle";
import { PostLikesTable } from "@/models/drizzle/schema";
import { and, eq } from "drizzle-orm";

export async function addlikes(postId: string, userId: string, currentLikeStatus: boolean) {
    try {
       
        const existingLike = await db.query.PostLikesTable.findFirst({
            where: (table, fn) => fn.and(
                eq(PostLikesTable.postId, postId),
                eq(PostLikesTable.userId, userId)
            ),
        });

        
        if (existingLike?.liked === true && currentLikeStatus) {
            console.log('Current like status is true, removing like');
        
            await db.delete(PostLikesTable)
                .where(and(eq(PostLikesTable.postId, postId), eq(PostLikesTable.userId, userId)));
        } else if (existingLike?.liked === false || !existingLike) {
           
            console.log('User liked the post');
            await db.insert(PostLikesTable).values({
                postId: postId,
                userId: userId,
                liked: true
            });
        }

    } catch (error) {
        console.log('Error during like operation:', error);
        return;
    }
}

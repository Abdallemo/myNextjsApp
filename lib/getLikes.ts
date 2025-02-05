"use server"
import db from "@/models/drizzle/client.drizle";

export default async function getPostsLikes(currentPostId: string) {
  try {
    const postLikes = await db.query.PostLikesTable.findMany({
      where: (table, fn) => fn.eq(table.postId, currentPostId),
      columns: {
        liked: true,
        userId:true,
        postId:true
      },
    });

    // If liked is null, treat it as false (or any default value you prefer)
    const sanitizedLikes = postLikes.map(like => ({
      ...like,
      liked: like.liked === null ? false : like.liked, // Replace null with false
    }));

    console.log("Sanitized Post Likes:", sanitizedLikes);
    return sanitizedLikes;
  } catch (error) {
    console.error("Error fetching post likes:", error);
    throw new Error("Failed to fetch post likes");
  }
}

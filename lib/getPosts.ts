
import db from "@/models/drizzle/client.drizle";
export type PostType = Awaited<ReturnType<typeof getPosts>>[number];
export default async function getPosts(offset?: number , limit?: number) {
  try {
    const postDrizzle = await db.query.PostTable.findMany({
      with: {
        author: {
          columns: {
            name: true, id: true
          },
          with: {
            prefrences: { columns: { emailUpdates: true } }
          }
        },
        likes: {

          columns: {
            id: true, liked: true, postId: true, userId: true
          },
        }
      },
      limit:limit,
      offset:offset
    })
    
    return postDrizzle;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}
export const getSinglePost = async(postId:string)=>{
  const postDrizzle = await db.query.PostTable.findFirst({
    where:(table,fn)=>fn.eq(table.id,postId),
  })
  return postDrizzle;
} 
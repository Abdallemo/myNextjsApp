
import db from "@/models/drizzle/client.drizle";
import { auth } from "@/auth";

export type PostType = Awaited<ReturnType<typeof getPosts>>[number];

export default async function getPosts() {


  try {


    const session = await auth();
    console.log('current User_Id :' + session?.user?.email as string)
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
      }
    })

    console.log(postDrizzle)


    return postDrizzle;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

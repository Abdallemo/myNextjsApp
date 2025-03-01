import getPostsLikes from "@/lib/dbActions/getLikes";
import { getSinglePost } from "@/lib/dbActions/getPosts";

export  default async function PostPage({
    params,
}: {
    params: Promise<{ postid: string }>
}) {
    const  postId  = (await params).postid;
    const singlePost =await getSinglePost(postId);
    const postlikes = await getPostsLikes(postId);
    console.log(postlikes.length)
    return (
        <>
            <main className="justify-center items-center flex text-zinc-900 w-screen h-screen flex-col">
                <h1 className="text-2xl font-mono ">Title: {singlePost?.postTitle}</h1>

                <p>{singlePost?.content}</p>
            </main>
        </>
    );
}
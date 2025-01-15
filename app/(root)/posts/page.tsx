// app/posts/page.tsx
import Card from "@/components/card";
import getPosts from "@/lib/getPosts";

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-center text-3xl py-10">All Posts</h1>
      <div className="justify-center items-center flex">
        <div className="grid grid-cols-4 gap-5">
          {posts.map((post) => (
            <Card post={post} key={post._id} />
          ))}
        </div>
      </div>
    </>
  );
}

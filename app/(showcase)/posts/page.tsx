// app/posts/page.tsx
import { auth } from "@/auth";
import MyCard from "@/components/card";
// import {Card} from "@/components/ui/card";
import getPosts, { PostType } from "@/lib/getPosts";


export default async function PostPage() {
  console.log('checing if client')
  const posts = await getPosts();
  const session = await auth()
  console.log('Yo Current Email ;;;;;;;'+session?.user?.email as string);
  return (
    <>
      <h1 className="text-center text-3xl py-10">All Posts</h1>
      <div className="justify-center items-center flex">
        <div className="grid grid-cols-4 gap-5">

          {posts.length>0 ?
          
            posts.map((post:PostType) => (

              <MyCard post={{...post ,id:post.id}} key={post.id} currentUserEmail={session?.user?.email as string} />
  
            )) : 
            
           <p>No posts Yet</p>
            
        }


        </div>
      </div>
    </>
  );
}

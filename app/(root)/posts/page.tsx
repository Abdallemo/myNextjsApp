// app/posts/page.tsx
import MyCard from "@/components/card";
// import {Card} from "@/components/ui/card";
import getPosts from "@/lib/getPosts";


export default async function PostPage() {
  console.log('checing if client')
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-center text-3xl py-10">All Posts</h1>
      <div className="justify-center items-center flex">
        <div className="grid grid-cols-4 gap-5">

          {posts.length>0 ?
          
            posts.map((post) => (

              <MyCard post={{...post,_id:post._id.toString()}} key={post._id}  />
  
            )) : 
            
           <p>No posts Yet</p>
            
        }


        </div>
      </div>
    </>
  );
}

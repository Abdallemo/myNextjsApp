"use client"
import { useEffect, useState } from 'react';
import  Card  from "@/components/card"

 

interface PostProps{
  _id:string,
  title:string,
  content:string
}

export default function PostPage() {

  const [allPosts, setallPosts] = useState<PostProps[]>([]);
  
  useEffect(() => {

    const fetchPosts = async () => {
      try {
        // console.log(posts.length);
        const res = await fetch('/api/posts');
        const data = await res.json();
        setallPosts(data);
      } catch (error) {
        console.log('Error fetching posts:' + error);
      }
    }
    fetchPosts();

  }, [])
  

  return (

    <>
      <h1 className='text-center text-3xl py-10'>All Posts</h1>
    <div className='justify-center items-center flex'>
      <div className='grid grid-cols-4 gap-5   '>


      {allPosts.map((post) => (
        <Card post={post} key={post._id} />
      ))}
      </div>
    </div>
</>
)
}

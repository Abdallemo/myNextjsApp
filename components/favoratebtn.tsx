"use client"
import { useState, useEffect } from 'react'
import { addlikes } from '@/lib/dbActions/addLikes';
import getPostsLikes from '@/lib/dbActions/getLikes';
import SocialButton from './social-button';



export default function Favoratebtn({ postId, userId }: { postId: string; userId: string }) {
  const [like, setLike] = useState<boolean>(false);
  const [likecount, setLikeCount] = useState<number | null>(null);


  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likesData = await getPostsLikes(postId);

        const isLiked = likesData.some(like => like.userId === userId && like.liked === true);
        setLike(isLiked);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setLikeCount(prev => likesData.length)
      } catch (error) {
        console.error("Error fetching like status:", error);
      }
    };
    fetchLikes();
    const interval = setInterval(fetchLikes, 5000);

    return () => clearInterval(interval);
  }, [postId, userId]);

  const likeHandler = async () => {
    console.log("Favoratebtn - postId:", postId, "userId:", userId);

    try {

      await addlikes(postId, userId, like);
      setLike(!like);
    } catch (error) {
      console.error("Error updating like status:", error);
    }

  };


  return (
    <div className='flex flex-row row-span-2 gap-1 justify-center'>
      <SocialButton icon={Hear()} number={likecount ?? 0} callback={likeHandler} Status={like} Color="blue" />
      <SocialButton icon={bookmark()} number={likecount ?? 0} callback={likeHandler} Status={like} Color="#ff5733" />


    </div>
  );
}



function Hear() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
}

function bookmark() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
  </svg>

}
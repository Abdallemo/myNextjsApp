"use client"
import { Heart } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from './ui/button';
import {addlikes} from '@/lib/addLikes';
import getPostsLikes from '@/lib/getLikes';

export default function Favoratebtn({ postId, userId }: { postId: string; userId: string }) {
  const [like, setLike] = useState<boolean>(false);

 
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likesData = await getPostsLikes(postId);
        
        const isLiked = likesData.some(like => like.userId === userId && like.liked === true);
        setLike(isLiked);
      } catch (error) {
        console.error("Error fetching like status:", error);
      }
    };
    fetchLikes();
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
      <Button onClick={likeHandler} variant={'secondary'}>
        <Heart color='Red' fill={like ? 'Red' : 'none'} />
      </Button>
    </div>
  );
}

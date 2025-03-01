"use client"
import { Heart } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from './ui/button';
import {addlikes} from '@/lib/dbActions/addLikes';
import getPostsLikes from '@/lib/dbActions/getLikes';
import { motion, AnimatePresence } from "framer-motion"
import { FormatCompactNumber } from '@/lib/helpers/formatIng';
export default function Favoratebtn({ postId, userId }: { postId: string; userId: string }) {
  const [like, setLike] = useState<boolean>(false);
  const [likecount, setLikeCount] = useState<number| null>(null);

 
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likesData = await getPostsLikes(postId);
        
        const isLiked = likesData.some(like => like.userId === userId && like.liked === true);
        setLike(isLiked);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setLikeCount(prev=>likesData.length)
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
    setLike((prevLike) => !prevLike);
    setLikeCount((prevCount)=>(like ? prevCount! -1 : prevCount!+1))
    try {
      
      await addlikes(postId, userId, like);
      setLike(!like);
    } catch (error) {
      console.error("Error updating like status:", error);
    }
    
  };
  const formatedLikes = FormatCompactNumber(likecount!)
 

  return (
    <div className='flex flex-row row-span-2 gap-1 justify-center'>
      <Button onClick={likeHandler} variant={'secondary'}>
        <Heart color='Red' fill={like ? 'Red' : 'none'} />
        <AnimatedCounter value={ Number(formatedLikes)!} />
      </Button>
    </div>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  return (
    <div className="relative h-5 w-10 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
          }}
          className={`absolute inset-0 ${value > 42 ? "text-pink-600" : "text-gray-500"}`}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}


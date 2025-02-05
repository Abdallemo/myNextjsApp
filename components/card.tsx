'use client'
import Favoratebtn from '@/components/favoratebtn'
import { Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import deletPost from '@/lib/deletePost';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PostType } from '@/lib/getPosts';



export default function MyCard({ post,currentUserEmail }: { post: PostType ,currentUserEmail:string}) {
  const _posts = post;
  console.log("MyCard - Current User Email:", currentUserEmail);

  
  const delteHandler = async (id: string) => {
    await deletPost(id);
  };

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>{_posts.postTitle}</CardTitle>
        <CardDescription className='flex flex-row justify-end'>
          {/* Pass postId and userId to the like button */}
          <Favoratebtn postId={post.id} userId={currentUserEmail} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{_posts.content}</p>
      </CardContent>
      <CardFooter className='flex flex-row justify-end'>
        <Button onClick={() => delteHandler(_posts.id)} variant={'default'}>
          <Trash2 />
        </Button>
      </CardFooter>
    </Card>
  );
}

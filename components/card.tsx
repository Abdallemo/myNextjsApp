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


interface CardProps {
  post: {
    _id: string;
    title: string;
    content: string;
    likes?: boolean;
  };
}
export default function MyCard({ post }: CardProps) {

  const _posts = post;
  const delteHandler = async (id: string) => {
    await deletPost(id)
  }

  return (

    <Card className='w-[350px]'>
      <CardHeader >
        <CardTitle>{_posts.title}</CardTitle>
        <CardDescription className='flex flex-row justify-end'>

        <Favoratebtn likes={_posts.likes!} />
        </CardDescription>
        


      </CardHeader>
      <CardContent>
        <p>{_posts.content}</p>
      </CardContent>

      <CardFooter className='flex flex-row justify-end'>
      <Button onClick={() => delteHandler(_posts._id)} variant={'default'}>
          <Trash2 />
        </Button>
      </CardFooter>

    </Card>


  )
}

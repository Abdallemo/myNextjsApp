
"use client"
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button';
export default function Favoratebtn({ likes }: { likes: boolean }) {

  const [like, setLike] = useState<boolean>(likes);


  const likeHandler = async () => {
    setLike(!like)
  }

  return (
    <div className='flex flex-row row-span-2 gap-1 justify-center ' >

      {!like ?
        <Button onClick={() => likeHandler()} variant={'secondary'}>
          <Heart color='Red' /></Button>
        :
        <Button onClick={() => likeHandler()} variant={'secondary'}><Heart color='Red' fill='Red' /></Button>
      }


    </div>
  )
}

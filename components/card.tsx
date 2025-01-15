import Favoratebtn from '@/components/favoratebtn'


interface CardProps {
    post: {
      _id: string;
      title: string;
      content: string;
    };
  }
export default function Card({post}:CardProps) {
    const _posts = post;
  return (
    <div className=" bg-orange-200 dark:bg-gray-700 rounded-md min-h-22 flex flex-col flex-grow max-w-[200px] p-2 text-wrap ">
        <div className="flex flex-row gap-6 justify-between">
            <p>{_posts.title}</p>
            <Favoratebtn/>
        </div>
        <div className="text-lg">
            <p>{_posts.content}</p>
        </div>
    </div>
    
  )
}

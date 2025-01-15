import { Button } from "@/components/ui/button"


export default function CreatePost() {
    return (

    <>
    <h1 className="text-center text-3xl">Create New Post</h1>
    <form action="" className="flex flex-col max-w-[300px] gap-2 mx-auto ]">
        <label htmlFor="title">Post Title</label>
        <input type="text" name="title" className="border border-gray-700 border-collapse rounded-sm focus:border-gray-900 h-10"/>
        <label htmlFor="title">Post Content</label>
        <textarea  name="content" className="border border-gray-700 border-collapse rounded-sm focus:border-gray-900 h-10" />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-400" >Create Post</Button>
    </form>
    </>    
  )
}

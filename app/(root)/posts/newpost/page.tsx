'use client'
import { Button } from "@/components/ui/button";
import postPosts from "@/lib/postPosts";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  title: z.string().min(4, {
    message: "Title must be at least 4 characters.",
  }).refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), 'Title should contain only alphabets'),
  content: z.string().min(4, {
    message: "Content must be at least 4 characters.",
  }),
});

export default function CreatePost() {
  const myform = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",  
      content: "",
    },
  });

  const submitHandler = async (values: z.infer<typeof formSchema>) => {
    await postPosts(values.title, values.content);
    console.log("Post added:", values);
    
    
    myform.reset();
  };

  return (
    <>
      <h1 className="text-center text-3xl">Create New Post</h1>
      
      {/* Use ShadCN form */}
      <Form {...myform}>
        <form className="flex flex-col max-w-[300px] gap-2 mx-auto" onSubmit={myform.handleSubmit(submitHandler)}>
          
          <FormField
            control={myform.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title..." {...field} />
                </FormControl>
                <FormDescription>Post title</FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={myform.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Input placeholder="Enter content..." {...field} />
                </FormControl>
                <FormDescription>your title content</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Add New Post</Button>
        </form>
      </Form>
    </>
  );
}

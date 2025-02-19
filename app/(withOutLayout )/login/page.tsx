'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Github, Mail } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { singInAction } from '@/lib/authActions/auth_actions'
import { useState } from "react"
import LoginLoader from "../_component/myLoadingComp"
const loginFormSchema = z.object({
  email: z.string().min(4, {
    message: "email must be at least 4 characters.",
  }).refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), 'Title should contain only alphabets'),
  password: z.string().min(4, {
    message: "password must be at least 4 characters.",
  }),
})

export default function Login() {
  const [isInLoadingState, setLoadingState] = useState(false);

  const submitHandler = async (values: z.infer<typeof loginFormSchema>) => {
    myformController.reset();
  };


  const myformController = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  return (
    <LoginLoader isLoading={isInLoadingState}>
      <main className="flex flex-col md:flex-row w-screen h-screen bg-primary md:justify-self-center md:flex md:items-center sm:h-screen sm:w-screen">

        <section className=" lg:w-1/2 md:w-screen md:h-screen md:flex md:items-center md:justify-center flex flex-col items-center justify-center bg-background sm:h-screen w-full h-full">

          <div className="flex flex-col gap-1 mb-4">
            <Button className="px-24 py-6" variant={'default'} onClick={async () => {
              setLoadingState(true);
              try {
                await singInAction();
              } catch (error) {
                console.log(error)
              }
            }}>
              <Github />Continue with Github
            </Button>
            <Button className="px-24 py-6">
              <Mail />Continue with Google
            </Button>
          </div>
          <div className="w-[500px] flex flex-row items-center justify-center ">
            <Separator orientation="horizontal" className=" bg-gray-900 w-1/3 mx-1" />
            <span className="p-0">or</span>
            <Separator orientation="horizontal" className=" bg-gray-900 w-1/3 mx-1" />

          </div>

          <Card className="flex flex-col w-[400px] pt-2">
            <CardContent>
              <Form {...myformController}>
                <form onSubmit={myformController.handleSubmit(submitHandler)} className="flex flex-col max-w-[400px] gap-2 ">

                  <FormField control={myformController.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={myformController.control} name="password" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button className="px-28 py-6 mt-4" variant={'default'}>
                    Login
                  </Button>

                </form>

              </Form>
            </CardContent>
          </Card>
        </section>
      </main>
    </LoginLoader>
  )
}

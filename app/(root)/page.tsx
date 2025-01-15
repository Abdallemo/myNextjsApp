import { Button } from "@/components/ui/button";

export default function  Home() {


  return (
    
    <>
    <main className="justify-center items-center flex m-10 flex-col gap-4">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Next Js Is Awsome</h1>
    <p className="text-xl text-muted-foreground">My first App with Next-Js im Exprementing it Right now Using Shadcn</p>
    <div className="mt-10 flex f gap-4 ">
    <Button variant={"secondary"}>Learn More</Button>
    <Button>Start Now</Button>

    </div>
    </main>

  
    

    </>
  );
}

import { Button } from "@/components/ui/button";
import PrismaIcon from "./_icons/prismaIcon";
import Link from "next/link";
import DrizzleIcon from "./_icons/dirzzleIcon";
import NextjsIcon from "./_icons/nextjsIcon";
import { ArrowRightIcon } from "lucide-react";

export default function  Home() {


  return (
    
    <>


    <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
        Next Js Is Awsome!
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
        My first App with Next-Js im Exprementing it Right now Using Shadcn
        </p>
        <Link href='/login'>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </Link>
      </section>
    <section  className="bg-primary text-primary-foreground ">
    <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="https://neon.tech">
              <DrizzleIcon />
            </Link>
            <Link href="https://clerk.com">
              <NextjsIcon />
            </Link>
            <Link href="https://neon.tech">
              <PrismaIcon />
            </Link>
            <Link href="https://neon.tech">
              <DrizzleIcon />
            </Link>
            <Link href="https://clerk.com">
              <NextjsIcon />
            </Link>
            <Link href="https://neon.tech">
              <PrismaIcon />
            </Link>
            <Link href="https://neon.tech">
              <DrizzleIcon />
            </Link>
            <Link href="https://clerk.com">
              <NextjsIcon />
            </Link>
            <Link href="https://neon.tech">
              <PrismaIcon />
            </Link>
            <Link className="md:max-xl:hidden" href="https://clerk.com">
              <PrismaIcon />
            </Link>
          </div>
        </div>
    </section>

    <section id="pricing" className="px-8 py-16 bg-accent/5">
    <h2 className="text-4xl text-center text-balance font-semibold mb-8">Yo this Might be Product Or sofware Price Card</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto"></div>
    </section>


  
    

    </>
  );
}

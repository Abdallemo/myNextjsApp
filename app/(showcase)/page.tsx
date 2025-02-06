import { Button } from "@/components/ui/button";
import PrismaIcon from "./_icons/prismaIcon";
import Link from "next/link";
import DrizzleIcon from "./_icons/dirzzleIcon";
import NextjsIcon from "./_icons/nextjsIcon";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { subscriptionTiersInOrder } from "@/models/constData/constdata";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FormatCompactNumber } from "@/lib/helpers/formatIng";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
      {subscriptionTiersInOrder.map(tier=>(
        <PricingCard key={tier.name} {...tier} />
      ))}
    </div>

    </section>
    <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <Link href="/">
          Logo
        </Link>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "PPP Discounts", href: "/" },
                { label: "Discount API", href: "/" },
              ]}
            />
            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "/" },
                { label: "SaaS Business", href: "/" },
                { label: "Online Courses", href: "/" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Features"
              links={[{ label: "PPP Discounts", href: "/" }]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                { label: "Salary Converter", href: "/" },
                { label: "Coupon Generator", href: "/" },
                { label: "Stripe App", href: "/" },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "Affiliate", href: "/" },
                { label: "Twitter", href: "/" },
                { label: "Terms of Service", href: "/" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Integrations"
              links={[
                { label: "Lemon Squeezy", href: "/" },
                { label: "Gumroad", href: "/" },
                { label: "Stripe", href: "/" },
                { label: "Chargebee", href: "/" },
                { label: "Paddle", href: "/" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                { label: "Any Website", href: "/" },
                { label: "Lemon Squeezy", href: "/" },
                { label: "Gumroad", href: "/" },
                { label: "Stripe", href: "/" },
                { label: "Chargebee", href: "/" },
                { label: "Paddle", href: "/" },
              ]}
            />
          </div>
        </div>
      </footer>

  
    

    </>
  );
}
function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding
}:typeof subscriptionTiersInOrder[number]){
  return(
    <Card>
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">Rm{priceInCents/100}/mo</CardTitle>
      <CardDescription> {FormatCompactNumber(maxNumberOfVisits)} pricing page visit/mo</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="text-lg w-full rounded-lg">Get Started</Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Features className="font-bold">{maxNumberOfProducts} {maxNumberOfProducts===1 ? 'Product':'Products'}</Features>
        <Features>Oem Discounts</Features>

        {canAccessAnalytics &&<Features>Can Upload Unlimated </Features>}
        {canCustomizeBanner &&<Features>Banner Customization</Features>}
        {canRemoveBranding &&<Features>Can Remove  </Features>}
      </CardFooter>
    </Card>
  )
}

function Features ({children,className}:{children:ReactNode , className?:string}){
  return(
      <div className={cn('flex items-center gap-2',className)}>
        <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5"/>
        <span>{children}</span>
      </div>
  )
  
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
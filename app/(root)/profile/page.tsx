import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ProfilePage(){
    const session = await auth();
    const username = session?.user!.name 
    const email = session?.user!.email 
    console.log(session?.user?.id);
    return(
        <div className="min-w-[350px] max-w-[500px] mx-auto my-10">
           <Card className=" ">
            <CardHeader>
            <CardTitle>Profile</CardTitle>

            </CardHeader>
            <CardDescription></CardDescription>
            <CardContent>
                <div>
                    <p>Username : {username}</p>
                    <p>Email : {email}</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Update Profile</Button>
            </CardFooter>
           </Card>
        </div>
    )
}


"use server"
import { signIn, signOut } from "@/auth";

export  const singOutAction = async () => {
    await signOut({ redirectTo: '/' });
}
export  const singInAction = async () => {
    await signIn('github',{redirectTo:'/posts'});
}

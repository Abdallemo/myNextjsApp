"use server"
import { signIn, signOut } from "@/auth";

export  const singOutAction = async () => {
    await signOut({ redirectTo: '/' });
}
export  const singInAction = async () => {
    await signIn('github',{redirectTo:'/posts'});
}
//TODO:Tryig to implement the action so that i can pass in it form handler with email
export  const singInWithEmailAction = async (email:string) => {
    await signIn('email',{email});
}

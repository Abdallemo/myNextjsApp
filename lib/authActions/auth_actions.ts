"use server"
import { signOut } from "@/auth";

export  const singOutAction = async () => {
    await signOut({ redirectTo: '/' });
}
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// export async function getCurrentUser() {
//   const session = await auth()
//   // const email:string|null|undefined = session?.user?.email
//   return session?.user?.email;
// }
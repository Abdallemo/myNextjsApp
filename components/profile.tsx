/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import Image from 'next/image';
type ProfileProps = {
    username: string | undefined |null;
    avatar: string | undefined | null;
};


const Profile = ({ username, avatar }: ProfileProps) => {

    return (
        <div className='  flex '>

            <Avatar>
                <AvatarImage src={avatar || ''} alt="@shadcn" />
                <AvatarFallback>{username?.charAt(0) || "?"}</AvatarFallback>
            </Avatar>
            {/* <span>{username||'unknown User'}</span> */}
        </div>
    )
}

export default Profile
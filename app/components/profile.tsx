/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import Image from 'next/image';
type ProfileProps = {
    username: string;
    avatar: string;
};


const Profile: React.FC<ProfileProps> = ({ username, avatar }) => {

    return (
        <div className=' w-[300] flex '>

            <Avatar>
                <AvatarImage src={avatar} alt="@shadcn" />
            </Avatar>
            <span>{username}</span>
        </div>
    )
}

export default Profile
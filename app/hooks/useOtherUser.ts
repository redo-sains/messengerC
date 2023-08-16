'use client'

import { useMemo } from "react"
import { FullConversationType } from "../types"
import {User} from "@prisma/client"
import { useSession } from "next-auth/react"


const useOtherUser = (converversation : FullConversationType | {
    users: User[]
}) => {
    
    const session = useSession();

    const otherUser = useMemo(()=> {
        const currentUserEmail = session?.data?.user?.email;

        const otherUser = converversation.users.filter((user) => user.email !== currentUserEmail)

        return otherUser[0]
    }, [session?.data?.user?.email, converversation.users])

    return otherUser;
}
 
export default useOtherUser;

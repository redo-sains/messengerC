import {useParams} from 'next/navigation'
import {useMemo} from 'react'

const useConversation = () => {
    const params = useParams()    
    
    const conversationId = useMemo(() => {
        if(!params?.conversationId){
            return '' 
        }

        return params.conversationId as string

    }, [params?.conversastionId])

    const isOpen = useMemo(() => !!conversationId, [conversationId,params?.conversastionId])
    
    

    return useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen, conversationId, params])
}

export default useConversation
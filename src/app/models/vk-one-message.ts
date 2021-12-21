export interface VkOneMessage {
    date: number 
    from_id: number
    id: number
    out: number
    peer_id: number
    text: string
    conversation_message_id: number
    fwd_messages: string
    important: boolean
    random_id: number
    attachments: string
    is_hidden: boolean
}
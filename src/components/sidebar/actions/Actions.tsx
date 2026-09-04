import type { Dispatch, SetStateAction } from 'react'
import './Actions.css'

type ActionsProps = {
    newChat : boolean,
    setNewChat : Dispatch<SetStateAction<boolean>>;
}

function Actions({newChat, setNewChat} : ActionsProps) {

    return (
        <div className="actions">
            <button className="new-chat" onClick={() => {setNewChat(true)}}>New Chat</button>
            <button className="new-chat">Tools</button>
            <button className="new-chat">Things</button>
        </div>
    )
}

export default Actions

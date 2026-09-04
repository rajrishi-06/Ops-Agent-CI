import type { Dispatch, SetStateAction } from 'react'
import './Sidebar.css'
import Actions from './actions/Actions'
import Recents from './recents/Recents'
import Navbar from './navbar/Navbar'

type SidebarProps = {
    decide : boolean, 
    setDecide: Dispatch<SetStateAction<boolean>>,
    newChat : boolean, 
    setNewChat : Dispatch<SetStateAction<boolean>>;
};

function Sidebar({decide, setDecide, newChat, setNewChat} : SidebarProps) {
    return (
        <>
            <div className='set'>
                <Navbar decide={decide} setDecide={setDecide} />
                <Actions newChat={newChat} setNewChat={setNewChat}/>
                <Recents />
            </div>
        </>
    )
}

export default Sidebar;
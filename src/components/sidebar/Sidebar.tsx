import type { Dispatch, SetStateAction } from 'react'
import './Sidebar.css'
import Navbar from './navbar/Navbar'

type SidebarProps = {
    decide : boolean, 
    setDecide: Dispatch<SetStateAction<boolean>>;
};

function Sidebar({decide, setDecide} : SidebarProps) {
    return (
        <>
            <div className='set'>
                <Navbar decide={decide} setDecide={setDecide} />
            </div>
        </>
    )
}

export default Sidebar;
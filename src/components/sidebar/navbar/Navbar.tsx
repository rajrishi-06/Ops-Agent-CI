import './Navbar.css'
import hamburger from './../../../assets/burger.png'
import brand_logo from './../../../assets/react.svg'

type NavbarProps = {
    decide : boolean, 
    setDecide: React.Dispatch<React.SetStateAction<boolean>>;
};



function Navbar({decide ,setDecide} : NavbarProps) {
    return (
        <>
            <div className='navbar'>
                <img src={brand_logo} className='brand-logo' style={{ display: decide ? 'block' : 'none' }}/>
                <img src={hamburger} onClick={() => setDecide(!decide)} className='hamburger'/>
                {/* <img src= ></img> */}
            </div>
        </>
    )
}

export default Navbar
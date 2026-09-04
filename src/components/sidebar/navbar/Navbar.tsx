import './Navbar.css'
import brand_logo from './../../../assets/react.svg'
import type { Dispatch, SetStateAction } from 'react'

type NavbarProps = {
    decide : boolean, 
    setDecide: Dispatch<SetStateAction<boolean>>;
};



function Navbar({decide ,setDecide} : NavbarProps) {
    return (
        <>
            <div className='navbar'>
                <img src={brand_logo} className='brand-logo' alt='Brand logo' />
                <button
                    type='button'
                    className='toggle-button'
                    onClick={() => setDecide(false)}
                    aria-label='Close sidebar'
                    aria-expanded={decide}
                >
                    <svg viewBox='0 0 24 24' aria-hidden='true'>
                        <path d='M6 6l12 12M18 6L6 18' />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Navbar
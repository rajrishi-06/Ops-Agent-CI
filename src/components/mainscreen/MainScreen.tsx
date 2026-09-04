import './MainScreen.css'
import type { Dispatch, SetStateAction } from 'react'

type MainScreenProps = {
    decide : boolean,
    setDecide: Dispatch<SetStateAction<boolean>>;
};

function MainScreen({decide, setDecide} : MainScreenProps) {

    return (
        <main className='main-screen'>
            {!decide && (
                <button
                    type='button'
                    className='toggle-button'
                    onClick={() => setDecide(true)}
                    aria-label='Open sidebar'
                    aria-expanded={decide}
                >
                    <svg viewBox='0 0 24 24' aria-hidden='true'>
                        <path d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </button>
            )}
            
        </main>
    )
}

export default MainScreen
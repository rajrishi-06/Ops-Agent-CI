import type { Dispatch, SetStateAction } from 'react';
import './Form.css'

type FormProps = {
    setNewChat : Dispatch<SetStateAction<boolean>>;
}

function Form({setNewChat} : FormProps) {
    return (
        <div className='form-area'>
            <form action="/#" className='input-form'>
                <div className='input-wrapper'>
                    <input type="text" id="query" name="query" placeholder='Type a message ...' aria-label="Message" />
                    <button type="submit" onClick={() => {setNewChat(true)}}>
                        <span>
                            <img src='' />
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form
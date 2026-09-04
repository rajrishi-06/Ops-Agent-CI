import './Form.css'

function Form() {
    return (
        <div className='form-area'>
            <form action="/#" className='input-form'>
                <div className='input-wrapper'>
                    <input type="text" id="query" name="query" placeholder='Type a message ...' aria-label="Message" />
                    <button type="submit">
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
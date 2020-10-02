import React from 'react'
import './dialog.css'
const Dialog: React.FC = () => {
    return (
        <React.Fragment>
            <div className='dialog'>
                <div className='participant1'>
                    <p>fasdasdasds</p>
                </div>
                <div className='participant2'>
                    <p>12312312312</p>
                </div>
                <div className='participant1'>
                    <p>asdasdasd</p>
                </div>
                <div className='participant2'>
                    <p>234234234</p>
                </div>
            </div>
            <div className='imput-message'>
               <textarea name='text' className='text-message' placeholder='Enter message...' ></textarea>
               <button className='send-button'>Send</button>
            </div>
        </React.Fragment>

    )
}

export default Dialog
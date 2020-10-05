import React, { useEffect, useState } from 'react'
import './dialog.css'
import socket from '../core/socket'
const Dialog: React.FC = () => {
    const [message, setMessage] = useState<string>('')
    useEffect(()=>{
    socket.on('DIALOGS:TYPING', true)
    }, [])
    const messageWrite = (e: any) => {
        socket.emit('DIALOGS:TYPING')
            if (e.keyCode === 13) {
                
            }
        
    }
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
                <textarea
                    name='text'
                    className='text-message'
                    placeholder='Enter message...'
                     onChange={(e)=> setMessage(e.target.value)}
                    onKeyUp={(e) => messageWrite(e)}
                ></textarea>
                <button className='send-button'>Send</button>
            </div>
        </React.Fragment>

    )
}

export default Dialog
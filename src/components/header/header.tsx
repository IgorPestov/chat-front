import React from 'react'
import './header.css'

const Header: React.FC = (props: any) => {
    const checkButton = props.history.location.pathname === `/home/dialogs/${1}` ? true : false
    const backOnDialogs = () => {
        props.history.push('/home/dialogs')
    }
    return (
        <div className='header'>
            {checkButton ? <button className='back-dialogs' onClick={backOnDialogs}>Back</button> : null
            }
            Header
        </div>
    )
}
export default Header;
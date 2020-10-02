import React from 'react'
import './menu.css'
const Menu: React.FC = (props: any) => {
    const dialogs = () => {
        props.history.push(`/home/dialogs`)
    }
    const setting = () => {
        props.history.push(`/home/setting`)

    }
    const profile = () => {
        props.history.push(`/home/contacts`)
    }
    return (
            <ul className='menu'>
                <li className='menu-nav'><a href='' onClick={profile} >Contacts</a></li>
                <li className='menu-nav'><a href='' onClick={dialogs} >Dialogs</a></li>
                <li className='menu-nav'><a href='' onClick={setting} >Settings</a></li>
            </ul>
    )
}
export default Menu
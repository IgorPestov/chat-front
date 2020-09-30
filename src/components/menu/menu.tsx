import React from 'react'
import './menu.css'
const Menu: React.FC = (props: any) => {
    console.log(props)
    const dialogs = () => {
        props.history.push(`/main/dialogs`)
    }
    const setting = () => {
        props.history.push(`/main/setting`)

    }
    const profile = () => {
        props.history.push(`/main`)
    }
    return (
            <ul className='menu'>
                <li className='menu-nav'><a href='' onClick={profile} >Profile</a></li>
                <li className='menu-nav'><a href='' onClick={dialogs} >Dialogs</a></li>
                <li className='menu-nav'><a href='' onClick={setting} >Settings</a></li>
            </ul>
    )
}
export default Menu
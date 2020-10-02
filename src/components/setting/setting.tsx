import React from 'react'
import './setting.css'

const Setting: React.FC = () => {
    return (
        <div className='settings'>
            <ul className='list-settings'>
                <li><a className='settings-items' href="">Edit</a></li>
                <li><a className='settings-items' href="">Language</a></li>
                <li><a className='settings-items' href="">Help</a></li>
                <li><a className='settings-items' href="">About us</a></li>
            </ul>
        </div>
    )
}

export default Setting;
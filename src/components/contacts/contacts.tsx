import React, { useEffect, useState } from 'react'
import './contacts.css'
import api from '../apiHelper/api'
const Contacts: React.FC = () => {
    const [contacts, setCntacts] = useState<any>([])
    const test = async () => {
        const user = await api.UserInfo(`5f1fde338da37030b05006c0`)
        setCntacts(user.contacts)

    }
    
    useEffect(() => {
        test()
    }, [])
    
    return (

        <ul>
            <input className='search-user' type='text' placeholder='Search...' />
            {contacts?.map((item: any) => {
                return (
                    <li>{item.name}</li>
                    
                )
            }) || <h1>You have't friends</h1>}
        </ul>
    )
}
export default Contacts;
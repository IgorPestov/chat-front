import React from 'react'
import './dialogs.css'
const Dialogs: React.FC = (props:any) => {
  const changeDialog = () => {
    props.history.push(`dialogs/${1}`)
  }
  return (
    <div className='dialogs'>
      <ul className='list-dialogs'>
        <li><a className='dialogs-items' onClick={changeDialog}>Nikolaj Coster-Waldau</a></li>
        <li><a className='dialogs-items'>Lena Headey</a></li>
        <li><a className='dialogs-items'>Emilia Clarke</a></li>
      </ul>
    </div>
  )
}
export default Dialogs;
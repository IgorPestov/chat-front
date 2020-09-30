import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../header'
import Menu from '../menu'
import Dialogs from '../dialogs'
import Setting from '../setting'

import './mainPage.css'

const mainPage: React.FC = (props: any) => {
    return (
        <div>
            <div className='main-page'>
                <Header />
                <Menu {...props} />
                <div className='profile-dialogs-settings'>
                    <Route history={props.history} path='/main/dialogs' component={Dialogs} />
                    <Route history={props.history} path='/main/setting' component={Setting} />
                </div>

            </div>
        </div>
    )
}
export default mainPage;
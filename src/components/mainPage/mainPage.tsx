import React, { useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Header from '../header'
import Menu from '../menu'
import DialogsAll from '../dialogs'
import Setting from '../setting'
import Contacts from '../contacts'

import './mainPage.css'

const mainPage: React.FC= (props: any) => {



    return (
        <div>
            <div className='main-page'>
                <Header  {...props} />
                <Menu {...props} />
                <div className='profile-dialogs-settings'>
                    <Switch>
                        {props.history.location.pathname !== `/home/dialogs/${1}` ? <Route history={props.history} path='/home/dialogs' component={DialogsAll.Dialogs} /> :
                            <Route history={props.history} path={`/home/dialogs/${1}`} component={DialogsAll.Dialog} />}
                        <Route history={props.history} path='/home/setting' component={Setting} />
                        <Route history={props.history} path='/home/contacts' component={Contacts} />
                        <Redirect from='/home' to='/home/dialogs' />
                    </Switch>

                </div>

            </div>
        </div>
    )
}
export default mainPage;
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        {/* o exact é para evitar que caia em outros 
            caminhos com '/' se nao cairia em outros casos como
            /users
            /users1
            /qualquercoisa
         */}
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>
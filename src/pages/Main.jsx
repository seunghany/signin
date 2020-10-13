import React from 'react'
import {SignInSide, Signup, Home} from '../components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Main = () => <>
    <BrowserRouter>
        <Switch>
            <Route exact path ='/' component={Home}/>
            <Route path ='/SignInSide' component={SignInSide}/>
            {/* <Route path ='/Signin' component={Signin}/> */}
            <Route path ='/Signup' component={Signup}/>
        </Switch>
    </BrowserRouter>
</>

export default Main
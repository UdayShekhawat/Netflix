import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Forgot from '../Forgot'
import Reset from '../Reset'
import Welcome from '../Welcome'

const Routes = () => {
    return (
        

            <Switch>
                
                
                <Route path="/" exact component={Welcome} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/forgot" exact component={Forgot} />
                <Route path="/reset" exact component={Reset}/>
            </Switch>

      
    )
}

export default Routes

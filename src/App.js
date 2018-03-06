import React from 'react'
import { StaticRouter } from 'react-router'
import {Router,Route} from 'react-router-dom'

import Input from './containers/Input'
import Txt from './containers/Txt'

function App (){
    return (
        <StaticRouter location={{ pathname: '/' }}>
        <div>
            <Router>
                <Route path="/" component={Input}/>
                <Route path="/txt" component={Txt}/>
            </Router>
        </div>
        </StaticRouter>
    )
}

export default App;
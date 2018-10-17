import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './App'

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
)

//使用Provider注入，让store和actions可以在子组件中，通过props访问使用
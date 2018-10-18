import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {Provider} from './context'
import {value} from './value'

ReactDOM.render(
    <Provider value={value}>
        <App />
    </Provider>,
    document.getElementById('root')
);

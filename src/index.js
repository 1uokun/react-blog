import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//根文件redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers'
let store = createStore(Reducers);

ReactDOM.render(
        <App />
    ,
    document.getElementById('root')
)

// store.subscribe(render) 监听state的变化

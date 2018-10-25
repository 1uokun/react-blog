import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//根文件redux
import { Provider } from 'react-redux'
import configureStore from './stores/configure'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

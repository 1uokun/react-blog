import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore'
const {store, persistor} = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            persistor={persistor}
        >
        <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

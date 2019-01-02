import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
const {store, persistor} = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            // loading={<View style={{flex:1,backgroundColor:'red'}}><Text>Loading...</Text></View>}
            persistor={persistor}
        >
        <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

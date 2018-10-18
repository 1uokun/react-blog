import React from "react";
import { render } from "react-dom";
import App from "./App";

import { Provider} from 'mobx-react';
import Store from './stores'
import Actions from './actions'
const store = new Store();
const actions = new Actions({store});

render(
    // ⑥使用Provider 在被 inject 的子组件里，可以通过 props.store props.actions 访问
    <Provider store={store} actions={actions}>
        <App />
    </Provider>,
  document.getElementById("root")
);

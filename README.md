## 书签
 -[Redux总结](https://github.com/dwqs/blog/issues/35)
 -[dva教程](https://www.jianshu.com/p/69f13e9123d9)

## containers
```
//获得store值
const mapStateToProps = (state) => {
    return {}
}

//发送事件
const mapDispatchToProps = (dispatch) => {
    return {
        _onHandleEvent: (params)=>{
            dispatch(actionFunc(params))        //import actionFunc from '../actions/actionFunc'
        }
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Input)
```

### actions
type : 常量CHANGE_LIANG
<br />
payload : 对象action数据的载体
```
export default actionFunc = (params) => {
    return {type:CHANG_LIANG,payload:params}
}

//type.js 用于描述
export const CHANG_LIANG = '常量'
```

### reducers
```
import { combineReducers } from 'redux';

const reducersName = (state,action)=>{
    state = {
        data : ''
    }
    switch(action.type){
        case CHANG_LIANG:
            return {
                data : action.params    //出自payload:params
            }
        default:
            return state
    }
}

export default combineReducers({
   reducersName
});
```

## 根文件
```
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducers from './reducers'

let store = createStore(Reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('#root')
)
```
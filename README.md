## 书签
 -[Redux总结](https://github.com/dwqs/blog/issues/35)
 -[dva教程](https://www.jianshu.com/p/69f13e9123d9)


## stores
`action`描述"发生了什么"， 使用`reducers`来根据action更新state的用法。
**Store**就是把它们联系到一起的对象。
 - 维持应用的state；
 - 提供`getState()`方法获取state；
 - 提供`dispatch(action)`方法更新state；
 - 通过`subscribe(listener)`注册监听器；
 - 通过`subscribe(listener)`返回的函数 **注销**监听器

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
)(Add)
```

### actions
`Action`是把数据从应用传到store的有效载荷。
它是store数据的**唯一**来源。一般来说会通过`store.dispatch()`将action传到store。


> type : 常量CHANGE_LIANG
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
Reducers指定了应用状态的变化如何响应`actions`并发送到store的，记住actions只是描述了*有事情发生了*这一事实，
并没有描述应用如何更新state

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


## 简单总结
`store` 用于描述`action`动作

`action` 用于载荷来自组件`dispatch`的动作（函数）

`reducers` 做一个桥指定`store`和对于的`action`

组件内引入`action`的动作，使用`connect`API赋给组件`StateToProps`和`DispatchToProps`动作
# with no redux-thunk

```javascript
const mapDispatchToProps = (dispatch) => {
  return {
     increment: () => dispatch({ type: 'INCREMENT' }),
     decrement: () => dispatch( decrement() ),  // ⚠️报错！
     decrement2: () => {
        /** 👷👷‍♀️只能在这里执行.then **/
        decrement().then(plainObject=>{
           dispatch(plainObject)
        })
     }
  }
};

// 异步action
function decrement(){
  return Promise.resolve({type: 'ASYNC_ACTION'})
}
```

> **`decrement`报错信息：**<br>
> `throw new Error: Actions must be plain objects,Use custom middleware for async actions.`
> `at dispatch (createStore.js:152)`<br>
> dispatch内必须是一个扁平化的object，<br>
> 或者是能直接返回一个`{type:'REDUCERS',payload:data}`的函数

> **缺点：**
> 1. 在decrement函数中无法获得其他reducers的state值，即`getState()`
> 2. 无法直接dispatch一个异步返回值

# with redux-thunk
```javascript
const mapDispatchToProps = (dispatch) => {
  return {
     increment: () => dispatch(actionThunkify()),
  }
};

function actionThunkify(){
    return (dispatch, getState)=>{
        setTimeout(()=>{
            dispatch({ type: 'INCREMENT', payload:"" })
        },1000)
    }
}
```

# 基本实现原理
### 7行代码实现
`redux-thunk`中间件(middleware)改写了`redux`的`dispatch()`方法
```javascript
    function dispatch(action){
        if(typeof action === "function"){
            action(dispatch)
        }else {
            console.log("TYPE",action)
        }
    }
```
### Usage
兼容异步/同步action
```javascript
   // 派送异步action
    dispatch((dispatch)=>{
        return dispatch(asyncFunction())
    });
    // 异步函数
    function asyncFunction(){
        return (dispatch)=>{
            setTimeout(()=>{
                dispatch({type:"ASYNC_ACTION"})
            },1000)
        }
    }


    // 同步函数
    dispatch((dispatch)=>{
        return dispatch({type:"SYNC_ACTION"})
    });


    // 直接对象
    dispatch({type:"PLAIN_OBJECT"})
```

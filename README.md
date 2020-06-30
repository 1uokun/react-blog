# with no redux-thunk

```javascript
const mapDispatchToProps = (dispatch) => {
  return {
     increment: () => dispatch({ type: 'INCREMENT' }),
     decrement: () => dispatch( decrement() ),
     asyncment: () => {
        asyncA().then(plainObject=>{
           dispatch(plainObject)
        })
     }
  }
};

function decrement(){
    return {type: 'DECREMENT'}
}

// 异步action
function asyncA(){
  return Promise.resolve({type: 'ASYNCMENT'})
}
```

> Actions must be plain objects,Use custom middleware for async actions.
> at dispatch (createStore.js:152)

> dispatch内必须是一个扁平化的object，
> 或者是能返回一个`{type:'REDUCERS',payload:data}`的函数

> 缺点：
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
        dispatch({ type: 'INCREMENT', payload:"" })
    }
}
```

# 基本实现原理
```javascript
    //redux-thunk middleware
    function dispatch(action){
        if(typeof action === "function"){
            action(dispatch)
        }else {
            console.log("TYPE",action)
        }
    }

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

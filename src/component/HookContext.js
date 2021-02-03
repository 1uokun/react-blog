/* useContext实践 */
import React from 'react'
import {useCounterReducer} from "../hook/useCounterReducer";

export const MyHookContext = React.createContext(null);

/**
 * class内的实践方式
 *
 *  1. 动态context
 *    创建：createContext
 *    注册：static contextType
 *    获取： this.context
 *
 *
 *  2. 嵌套组件
 *    创建：createContext
 *    注册/获取：<Context.Consumer>{(context)=>{}}</Context.Consumer>
 *
 *
 *
 * function内的实践方式
 *
 *  1. useContext hook
 *    创建：createContext
 *    注册：const context = useContext(Context)
 *
 * 防止子组件非必要重复渲染的实践方式
 *
 *  1. 父组件使用{props.children}来包裹子组件
 *      这样在父组件内的state或者context value改变时，
 *      无关联state或context的子组件将不会重新渲染
 * **/

export function MyHookContextProvider(props){
    return (
        <MyHookContext.Provider value={props.value}>
            {props.children}
        </MyHookContext.Provider>
    )
}

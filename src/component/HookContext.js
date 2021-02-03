/* useContext实践 */
import React from 'react'
import {useCounterReducer, useForceUpdate} from "../hook/useCounterReducer";
import {useRenderTimes} from "./HookRef";

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

export const ContextA = React.createContext({});
export const ContextB = React.createContext({});

export function ProviderA(props){
    return (
        <ContextA.Provider value={props.value}>
            {props.children}
        </ContextA.Provider>
    )
}
export function ProviderB(props){
    const times = useRenderTimes();
    return (
        <ContextB.Provider value={props.value}>
            {props.children}
            <p>{"Other Sub Context render times: "+times}</p>
        </ContextB.Provider>
    )
}

function ConfigureProvider(props){
    return (
        <ProviderA value={props.value}>
            <ProviderB >
                {props.children}
            </ProviderB>
        </ProviderA>
    )
}


//调用ConfigureProvider并使用，
//ConfigureProvider下的所有Context都会无必要地渲染
export function MultipleContext(){
    const forceUpdate = useForceUpdate();

    return (
        <ConfigureProvider>
            <button onClick={forceUpdate}>forceUpdate</button>
        </ConfigureProvider>
    )
}

//优化：给ConfigureProvider再封装一层ConfigProviderOutside
//copy: https://zhuanlan.zhihu.com/p/313983390
/*
export function ConfigProviderOutside(){
    const forceUpdate = useForceUpdate();

    return (
        <button onClick={forceUpdate}>forceUpdate</button>
    )
}
export function MultipleContext(){
    return (
        <ConfigureProvider>
            <ConfigProviderOutside />
        </ConfigureProvider>
    )
}
*/

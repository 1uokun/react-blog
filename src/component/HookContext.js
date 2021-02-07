/* useContext实践 */
import React from 'react'
import {useForceUpdate} from "../hook/useCounterReducer";
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
    /**
     * 看这里！！！
     * @answer: memorize contextValue 当然引用值可以，原始值没必要
     * **/
    const {theme} = props;
    const memoedConfig = React.useMemo(
        ()=>{
            return {theme}
        },
        [theme]
    );
    return (
        <ProviderA value={memoedConfig}>
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
    const [theme, setTheme] = React.useState({color:'red'});

    /**
     * 看这里！！！
     *
     * 如果是一个常量的话 要么ref，要么这里也要memo啊
     * **/
    const _theme = React.useMemo(()=>{
        return {color:'green'}
    },[]);
    const __theme = React.useRef({color:'purple'}).current;
    return (
        <ConfigureProvider theme={theme}>
            <ComponentUseContextMemo />
            <button onClick={forceUpdate}>forceUpdate</button>
            <button onClick={()=>setTheme({color:'blue'})}>change theme</button>
        </ConfigureProvider>
    )
}

/**
 * 看这里！！！这个才是重点
 *
 * @description 为了防止不必要的重新渲染，我们加了memo
 * @description 但是当我们在memo组件中使用Context后，memo将doest work
 * @description 强调被使用的Context的value一定是一个非原始值，即引用值 {xx:props.xx}
 * @question: 那么如何优化呢？
 * @answer: 将contextValue也进行memo化，详见function ConfigureProvider
 * **/
function ComponentUseContext(){
    const context = React.useContext(ContextA);
    const times = useRenderTimes();
    return (
        <div>
            <p style={context.theme}>{"Component use Context render times: "+times}</p>
        </div>
    )
}
const ComponentUseContextMemo = React.memo(ComponentUseContext);

//优化：给ConfigureProvider再封装一层ConfigProviderOutside
//copy: https://zhuanlan.zhihu.com/p/313983390
// 当然这种优化带有一定性的误导性，不管用不用封装一层ConfigProviderOutside，
// 换成其他的任何类型的组件都会re-render，不能让Context背锅，这是React.createElement与层级关系导致的。
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

//优化2：memorize context value
//copy: https://github.com/ant-design/ant-design/pull/28792/files#diff-0a9895a32672ec55a084aa7165fc8666008942903b8e51e30b662e9e1ecffb56R144
/*
function ConfigureProvider(props){
    const {theme} = props;
    const memoedConfig = React.useMemo(
        ()=>{
            return {theme}
        },
        [theme]
    );
    return (
        <ProviderA value={memoedConfig}>
            <ProviderB >
                {props.children}
            </ProviderB>
        </ProviderA>
    )
}
 */

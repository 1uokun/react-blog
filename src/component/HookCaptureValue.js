/* useEffect的Capture Value快照概念 */
import * as React from 'react'

/**
 * 1. Q: 状态值为什么不是最新的？
 *    A: 为了防止因React认为props或者state没有变更而引起的bug，所以会记录每一次的CaptureValue快照
 * **/
export function HookCaptureValue(){
    const [count, setCount] = React.useState(0);

    useDidUpdate(()=>{

        const id = setTimeout(()=>{
            alert("count: "+count)
        },3000);

        // return clearTimeout.bind(this,id)

    },[count]);

    return (
        <div>
            当前Counter: {count}
            <br/>
            <button onClick={()=>setCount(pre=>pre+1)}>+</button>
            <button onClick={()=>setCount(pre=>pre-1)}>-</button>
        </div>
    )
}

/**
 * 2. Q:如何获取即刻的count变量
 *    A:使用ref存储最新的count (所以为什么是xx.current命名了)
 * **/
export function HookCaptureValueWithRef(){
    const [count, setCount] = React.useState(0);
    const currentCount = React.useRef(count);

    useDidUpdate(()=>{
        currentCount.current = count;
        const id = setTimeout(()=>{
            alert("count: "+currentCount.current)
        },3000);

        // return clearTimeout.bind(this,id)

    },[count]);

    return (
        <div>
            当前Counter: {count}
            <br/>
            <button onClick={()=>setCount(pre=>pre+1)}>+</button>
            <button onClick={()=>setCount(pre=>pre-1)}>-</button>
        </div>
    )
}

function useDidUpdate(effect,inputs){
    const didMount = React.useRef(false);

    React.useLayoutEffect(()=>{
        if(didMount.current){
            effect()
        }else {
            didMount.current = true
        }
    },inputs)
}

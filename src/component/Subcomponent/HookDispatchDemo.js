/*使用useReducer+useContext模拟redux*/
import React,{useContext} from 'react'
import {DECREMENT, INCREMENT} from "../../hook/useCounterReducer";
import {MyHookContext} from "../HookContext";

export function HookDispatchDemo(){
    const {counterState,dispatch} = useContext(MyHookContext);
    return (
        <>
            Counter镜像数据:{counterState.count}
            <br/>
            <button onClick={()=>{dispatch({type:INCREMENT})}}>+</button>
            <button onClick={()=>{dispatch({type:DECREMENT})}}>-</button>
        </>
    )
}

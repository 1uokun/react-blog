/* useLayoutEffect + useEffect 模拟实现 useCallback(ref) */
import React, {useState,useLayoutEffect, useRef, useCallback} from 'react'

export function HookLayoutEffect(){
    const [visible, setVisible] = useState(true);
    const [state, setState] = useState({a:"",b:""});
    const refCallback = useCallback(
        (node)=>{
            if(node){
                console.log("HookLayoutEffect useCallback",node);
                setState(pre=>{return {...pre,a:node.style.backgroundColor}})
            }
        },
        []
    );

    const refLayout = useRef(null);
    useLayoutEffect(()=>{
        if(refLayout.current){
            console.log("HookLayoutEffect useLayoutEffect",refLayout.current);//会执行2次
            setState(pre=>{return {...pre,b:refLayout.current.style.backgroundColor}})
        }
    },[refLayout.current]); //监听指定DOM，如果不监听，当DOM不存在时将不再执行

    return (
        <>
            {visible&&<div ref={refCallback}
                 style={{width:50,height:50,backgroundColor:'yellow'}}
            >
                <p>{state.a}</p>
            </div>}
            {visible&&<div ref={refLayout}
                 style={{width:50,height:50,backgroundColor:'green'}}
            >
                <p>{state.b}</p>
            </div>}
            <button onClick={()=>{
                setVisible(pre=>!pre);
                setState({})
            }}>toggle</button>
        </>
    )
}

/* useRef和useImperativeHandle */
import React,{useRef,useState,useEffect} from 'react'

export function HookRefText(){
    const inputEl = useRef({name:"Niko"});
    console.log("inputEl",inputEl)
    const clean = function(){
        inputEl.current.value = ""
    };

    const [count, setCount] = useState(0);
    const prevStateRef = useRef({count});
    useEffect(()=>{
        prevStateRef.current = {count};
    },[count]);

    return (
        <>
            <h3> - 通过ref直接操作DOM</h3>
            <input ref={inputEl}
                   type="text"
                   defaultValue={"CLick button to clean me"}
            />
            <button onClick={clean}>clear the input</button>
            <br/>
            <h3> - 如何获得上一轮的props或state?</h3>
            <button onClick={()=>setCount(pre=>pre+1)}>+</button>
            <p>Now:{count},before:{prevStateRef.current.count}</p>
        </>
    )
}

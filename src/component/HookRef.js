/* useRef和useImperativeHandle */
import React,{useRef} from 'react'

export function HookRefText(){
    const inputEl = useRef({name:"Niko"});
    console.log("inputEl",inputEl)
    const clean = function(){
        inputEl.current.value = ""
    };

    return (
        <>
            <input ref={inputEl}
                   type="text"
                   defaultValue={"CLick button to clean me"}
            />
            <button onClick={clean}>clear the input</button>
        </>
    )
}

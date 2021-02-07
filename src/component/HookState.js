/* useState实例 */
import React from 'react'

export function HookState(){
    const initData = function (type) {
        console.log(type+": initData");
        let arr = [];
        for(let i=0;i<100000;i++){
            arr.push(i)
        }
        return arr.length;
    };

    // const [count, setCounter] = React.useState(initData()); //这种每一次都会执行initData
    const [count, setCounter] = React.useState(()=>initData("state"));

    //ref不可以像useState那样惰性初始
    // const ref = React.useRef(()=>initData("ref")); //会返回一个函数而不是一个值
    const ref = React.useRef(undefined); //会返回一个函数而不是一个值
    function getRef(){
        if(!ref.current){
            ref.current = initData("type")
        }

        return ref.current
    }


    const increment = React.useCallback(()=>{

        console.log("ref current: "+getRef());

        setCounter(pre=>pre+1)
    });



    return (
        <>
            {count}
            <button onClick={increment}>+1</button>
        </>
    )
}

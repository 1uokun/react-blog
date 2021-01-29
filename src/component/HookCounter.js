/* 如果我的 effect 的依赖频繁变化，我该怎么办？ */
import React,{useState, useEffect} from 'react'

export function HookCounter(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        const id = setInterval(()=>{
            setCount(c=>c+1);
            // setCount(count + 1) //effect第二个参数并没有关联count 所以只会执行一次
        },1000);

        return ()=>{
            clearInterval(id)
        }
    },[]);

    return <h1>{count}</h1>
}

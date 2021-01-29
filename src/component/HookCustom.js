/* 自定义Hook间共享逻辑 */
import React,{useState} from 'react'
import {useFriendStatus} from "../hook/useFriendStatus";

export function HookCustom(){
    const [id, setId] = useState("");

    const newId = useFriendStatus(id);

    const [lazyState, setState] = useState(()=>{
        return 1
    });

    return (
        <div>
            <h1>{newId}</h1>
            <h1>{lazyState}</h1>
            <button onClick={()=>{setId(new Date().getTime())}}>get id</button>
        </div>
    )
}

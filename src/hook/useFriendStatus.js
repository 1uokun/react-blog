/* 自定义Hook */
import React,{useState, useEffect} from 'react';
export function useFriendStatus(id){
    const [state, setState] = useState(id);
    console.log(id,state);
    // 传入的id变化时不会直接修改state
    // return state;
    useEffect(()=>{
        setState(id);
    },[id]);

    return state
}

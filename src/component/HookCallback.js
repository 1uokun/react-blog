/* useCallback */
/* useImperativeHandle + forwardRef */
import React from 'react'
const { useState, useCallback, useRef, useImperativeHandle, forwardRef } = React;

export const HookCallback =forwardRef((props,ref)=>{
    const [count, setCount] = useState(0);
    const [otherCounter, setOtherCounter] = useState(0);
    const functionsCounter = useRef(new Set());
    const increment = useCallback(() => {
        setCount(count + 1)
    }, [count]);
    const decrement = useCallback(() => {
        setCount(count - 1)
    }, [count]);
    const incrementOtherCounter = useCallback(() => {
        setOtherCounter(otherCounter + 1)
    }, [otherCounter]);

    // const increment = (() => {
    //   setCount(count + 1)
    // });
    // const decrement = (() => {
    //   setCount(count - 1)
    // });
    // const incrementOtherCounter = (() => {
    //   setOtherCounter(otherCounter + 1)
    // });

    functionsCounter.current.add(increment);
    functionsCounter.current.add(decrement);
    functionsCounter.current.add(incrementOtherCounter);

    console.log(functionsCounter);
        useImperativeHandle(ref, () => ({
        functionsCounter,
        incrementOtherCounter,
    }));
    return (
        <>
            Count: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
        </>
    )
});


/**
 * useCallback缓存Hook
 *
 * 执行incrementOtherCounter时，只有otherCounter值改变，
 * 所以incrementOtherCounter函数更新了
 * 而increment/decrement理应不更新，new Set()会自动去重，所以只会size+1，
 *
 * 不使用useCallback的话就会size+3，因为每一次的re-render都会创建新的函数
 * **/

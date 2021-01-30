/**
 * createRef与useRef的区别
 *
 * 每一次的re-render都会执行一次createRef，但不会再执行useRef
 * useRef除了用于DOM refs之外，还能作为一个容器{current:xxx}存在
 *
 * @link https://stackoverflow.com/questions/54620698/whats-the-difference-between-useref-and-createref
 * **/
import React,{useRef, createRef, useState, useEffect} from 'react'
export function DiffCreateRefWithUseRef() {
    const [renderIndex, setRenderIndex] = useState(1);
    const refFromUseRef = useRef(null);
    const refFromCreateRef = createRef();

    console.log(
        refFromUseRef, // {current:undefined} -> {current: 1}
        refFromCreateRef // {current: null} -> still {current: null}
    );

    if (!refFromUseRef.current) {
        refFromUseRef.current = renderIndex;
    }
    if (!refFromCreateRef.current) {
        refFromCreateRef.current = renderIndex;
    }

    //useRef作为容器使用，类似class的一个this.xx实例属性
    const intervalRef = useRef(null);
    useEffect(() => {
        const id = setInterval(() => {
            // ...
        });
        intervalRef.current = id;
        return () => {
            clearInterval(intervalRef.current);
        };
    });


    return (
        <div className="App">
            Current render index: {renderIndex}
            <br />
            First render index remembered within refFromUseRef.current:
            {refFromUseRef.current}
            <br />
            First render index unsuccessfully remembered within
            refFromCreateRef.current:
            {refFromCreateRef.current}
            <br />
            <button onClick={() => setRenderIndex(prev => prev + 1)}>
                Cause re-render
            </button>
        </div>
    );
}

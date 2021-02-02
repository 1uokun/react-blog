/* useMemo */
import React,{useReducer,useEffect,useCallback,useMemo} from 'react';
import {useRenderTimes} from "./HookRef";

export function HookMemo(){
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const primitiveValue = 1; //原始值，不可变的值
    const _bar = () => {};
    const _baz = [1, 2, 3];
    const bar = useCallback(_bar,[]);
    const baz = useMemo(()=>_baz,[]);

    return (
        <>
            <Memoized>
                <Sub bar={_bar} baz={_baz} primitiveValue={primitiveValue} ignored={ignored}/>
            </Memoized>
            <Memoized>
                <Sub bar={bar} baz={baz} primitiveValue={2} ignored={ignored}/>
            </Memoized>

            <button onClick={forceUpdate}>re-render</button>


            <p>测试memo</p>
            <Memoized>only text as children</Memoized>
            <Memoized><b>nested children嵌套子组件</b></Memoized>
        </>
    )
}

function Sub({bar,baz,primitiveValue,ignored}){
    const options = {bar, baz,primitiveValue};

    // const options = useMemo(()=>{return {bar, baz,primitiveValue,ignored}},[]);;
    useEffect(()=>{
        console.log("re-render",options.primitiveValue) // re-render 1
    },[bar, baz,primitiveValue]);//不能使用 [options] + useMemo(options) 这样就会永远都更新不了

    //如果不使用useMemo/useCallback，那么每次父组件re-render时，
    //传递过来的bar/baz（非原始值）都是新的引用
    //所以useMemo的存在就是为了缓存对象和数组的引用
    //useCallback缓存函数的引用
    //细化每一个子节点来模拟shouldComponentUpdate

    const times = useRenderTimes();

    return <>子组件内不会刷新就好，Memoized父组件刷新无所谓:<br/>{times}</>
}


//link: https://gist.github.com/slikts/e224b924612d53c1b61f359cfb962c06
const Memoized =React.memo(function(props){
    const times = useRenderTimes();
    const memoChildren = useMemo(()=>props.children ,[]);//core
    return (
        <div>
            {memoChildren}
            <p>
                Renders: {times}
            </p>
        </div>
    )
});

/* useMemo */
import React,{useReducer,useEffect,useCallback,useMemo} from 'react';

export function HookMemo(){
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const primitiveValue = 1; //原始值，不可变的值
    const _bar = () => {};
    const _baz = [1, 2, 3];
    const bar = useCallback(_bar,[]);
    const baz = useMemo(()=>_baz,[]);
    return (
        <>
        <Sub bar={_bar} baz={_baz} primitiveValue={1} ignored={ignored}/>
        <Sub bar={bar} baz={baz} primitiveValue={2} ignored={ignored}/>
        <button onClick={forceUpdate}>re-render</button>
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

    return <></>
}

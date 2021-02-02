/* useRef和useImperativeHandle */
import React,{useRef,useState,useEffect,useMemo} from 'react'
import deepEquals from 'fast-deep-equal';

export function HookRefText(props){
    const inputEl = useRef({name:"Niko"});
    // console.log("inputEl",inputEl)
    const clean = function(){
        inputEl.current.value = ""
    };

    const [count, setCount] = useState(0);

    // 记录上一次的数据
    const prevCount = usePreviousValue(count);

    const times = useRenderTimes();


    //ajax
    const [data, setData] = useState({});
    const getData = function(){
        setTimeout(()=>{
            setData({data:[1,2,3], code:0, status:200});
        })
    };

    useEffect(()=>{
        console.log("只会执行一次: ",data)
    },[useOriginCopy(data)]);

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
            <p>Now:{count},before:{prevCount}</p>
            <h3> - 渲染计数</h3>
            <p>{times}</p>
            <h3> - useDeepMemo 模拟deep PureComponent</h3>
            <p>{JSON.stringify(data,null,2)}</p>
            <button onClick={getData}>ajax</button>

        </>
    )
}


// 记录上一次的数据
function usePreviousValue(value){
    const previous = useRef(undefined);
    const previousValue = previous.current;
    previous.current = value;
    return previousValue;
}

// 记录渲染次数
export function useRenderTimes(){
    const times = useRef(0);
    times.current++;
    return times.current;
}

// 深度对比确定是否更新 DeepPureComponent
// 上一次的值与这一次内容相同的话，就把上一次还给你好啦
const useOriginCopy = function(value){
    const cache = useRef(undefined);

    if (deepEquals(cache.current, value)) {
        return cache.current;
    }

    cache.current = value;
    return value;
};

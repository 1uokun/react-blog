import React,{useState} from 'react'
import {useFormChange} from "./hook/useFormChange";
import HookRules from "./component/HookRules";
import {HookCustom} from "./component/HookCustom";
import {HookCounter} from "./component/HookCounter";
import {DECREMENT, INCREMENT, JUMPDISPATCH, useCounterReducer} from "./hook/useCounterReducer";
import {HookDispatchDemo} from "./component/Subcomponent/HookDispatchDemo";
import {MyHookContext} from "./component/HookContext";

function App (){
    const {value, onChange} = useFormChange('Niko');
    const secondName = useFormChange('Bellic');

    const [counterState, dispatch] = useCounterReducer();

    const JumpDispatch = function(){
        counterState.obj.name = "niko";
        dispatch({type:JUMPDISPATCH,payload:counterState})
        //并不会发生重新渲染,因为React用了Object.is比较算法
    };
    console.log("render ing...");
    return (
        <MyHookContext.Provider value={{counterState, dispatch}}>
        <ul>
            <li>
                <h2>
                    创建你的第一个Hook
                </h2>
                <details>
                    <label>{value}</label>
                    <input type="text"
                           value={value}
                           onChange={onChange}
                    />
                    <br/>
                    <label>{secondName.value}</label>
                    <input type="text"
                           value={secondName.value}
                           onChange={secondName.onChange}
                    />
                </details>
            </li>
            <li>
                <h2>
                    如果我的 effect 的依赖频繁变化，我该怎么办？
                </h2>
                <details>
                    <HookCounter />
                </details>
            </li>
            <li>
                <h2>
                    reducer重写HookCounter
                </h2>
                <details>
                    Count: {counterState.count}
                    <br/>
                    <button onClick={()=>dispatch({type:INCREMENT,payload:{...counterState,count:counterState.count+1}})}>+</button>
                    <button onClick={()=>dispatch({type:DECREMENT})}>-</button>
                    <br/>
                    <button onClick={JumpDispatch}>JumpDispatch</button>
                </details>
                <details>
                    <HookDispatchDemo />
                </details>
            </li>

            <li>
                <h2>
                    Hook规则
                </h2>
                <details>
                    <HookRules />
                </details>
            </li>

            <li>
                <h2>
                    自定义Hook间共享逻辑
                </h2>
                <details>
                    <HookCustom />
                </details>
            </li>
        </ul>
        </MyHookContext.Provider>
    )
}

export default App;

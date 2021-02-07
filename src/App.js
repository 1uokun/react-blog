import React,{useRef} from 'react'
import {useFormChange} from "./hook/useFormChange";
import HookRules from "./component/HookRules";
import {HookCustom} from "./component/HookCustom";
import {HookCounter} from "./component/HookCounter";
import {DECREMENT, INCREMENT, JUMPDISPATCH, useCounterReducer, useForceUpdate} from "./hook/useCounterReducer";
import {HookDispatchDemo} from "./component/Subcomponent/HookDispatchDemo";
import {MultipleContext, MyHookContext, MyHookContextProvider} from "./component/HookContext";
import {HookRefText} from "./component/HookRef";
import {DiffCreateRefWithUseRef} from "./component/DiffCreateRefWithUseRef";
import {HookCallback} from "./component/HookCallback";
import {HookMemo} from "./component/HookMemo";
import {HookLayoutEffect} from "./component/HookLayoutEffect";
import {HookCaptureValue, HookCaptureValueWithRef} from "./component/HookCaptureValue";
import {HookState} from "./component/HookState";

function App (){
    const {value, onChange} = useFormChange('Niko');
    const secondName = useFormChange('Bellic');

    const [counterState, dispatch] = useCounterReducer();
    const forceUpdate = useForceUpdate();

    const JumpDispatch = function(){
        counterState.obj.name = "niko";
        dispatch({type:JUMPDISPATCH,payload:counterState});
        //并不会发生重新渲染,因为React用了Object.is比较算法

        //ref自定义组件
        if(HookCallbackRef.current){
            HookCallbackRef.current.incrementOtherCounter()
        }
    };

    const HookCallbackRef = useRef(null);

    console.log("render ing...",HookCallbackRef);
    return (
        <MyHookContextProvider value={{counterState, dispatch}}>
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
                    useState实例
                </h2>
                <details>
                    <h3>
                        - 惰性初始state
                    </h3>
                    <HookState />
                </details>
            </li>
            <li>
                <h2>
                    useEffect实例
                </h2>
                <details>
                    <h3>
                         - 如果我的 effect 的依赖频繁变化，我该怎么办？
                    </h3>
                    <details>
                        <HookCounter />
                    </details>

                    <h3> - 理解Capture Value特性 </h3>
                    <details>
                        <ul>
                            <li>
                                <h4> - 状态值为什么不是最新的？ </h4>
                                <HookCaptureValue/>
                            </li>
                            <li>
                                <h4> - 如何获取即刻的count变量？ </h4>
                                <HookCaptureValueWithRef/>
                            </li>
                        </ul>
                    </details>
                </details>
            </li>
            <li>
                <h2>
                    useReducer/useContext实例
                </h2>
                <details>
                    <h3> - reducer重写HookCounter </h3>
                    Count: {counterState.count}
                    <br/>
                    <button onClick={()=>dispatch({type:INCREMENT,payload:{...counterState,count:counterState.count+1}})}>+</button>
                    <button onClick={()=>dispatch({type:DECREMENT})}>-</button>
                    <br/>
                    <button onClick={JumpDispatch}>JumpDispatch</button>

                    <br/>
                    <br/>
                    <HookDispatchDemo />
                    <h3> - 模拟强制更新forceUpdate</h3>
                    <button onClick={()=>forceUpdate()}>forceUpdate</button>

                    <fieldset>
                        <legend>
                            <h3> - Context嵌套使用 </h3>

                        </legend>
                        对于最终合并后组件，也要HOC一层，也就是再封装一层ConfigProviderOutside，并传入props.children
                    </fieldset>
                    <br/>
                    <MultipleContext />
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
            <li>
                <h2>
                    useCallback实例
                </h2>
                <details>
                    <HookCallback ref={HookCallbackRef}/>
                </details>
            </li>
            <li>
                <h2>
                    useRef实例
                </h2>
                <details>
                    <HookRefText />
                    <h3> - DiffCreateRefWithUseRef</h3>
                    <details>
                        <DiffCreateRefWithUseRef />
                    </details>
                </details>

            </li>
            <li>
                <h2>
                    useMemo实例
                </h2>
                <details>
                    <HookMemo />
                </details>
            </li>
            <li>
                <h2>
                    useLayoutEffect实例
                </h2>
                <details>
                    <HookLayoutEffect />
                </details>
            </li>
        </ul>
        </MyHookContextProvider>
    )
}

export default App;

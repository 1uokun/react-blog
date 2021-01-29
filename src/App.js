import React,{useState} from 'react'
import {useFormChange} from "./hook/useFormChange";
import HookRules from "./component/HookRules";
import {HookCustom} from "./component/HookCustom";
import {HookCounter} from "./component/HookCounter";

function App (){
    const {value, onChange} = useFormChange('Niko');
    const secondName = useFormChange('Bellic');
    return (
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
    )
}

export default App;

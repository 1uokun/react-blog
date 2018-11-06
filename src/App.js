import React,{Component,lazy,Suspense} from 'react'

import Add from './component/Add'
import Cut from './component/Cut'
import {Icon} from 'antd-mobile'
const Txt = lazy(()=>import('./component/Txt'));

function App (){
    return (
        <div>
            <Suspense fallback={<Icon type="loading" />}>
                <Txt />
            </Suspense>
            <Add />
            <Cut />
        </div>
    )
}

export default App;
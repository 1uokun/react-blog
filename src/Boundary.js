/* <Suspense> + Error Boundary 简化异步组件状态 */
import React from 'react'
import {Boundary, useResource} from 'react-suspense-boundary';
//useResource借助Context传递异步数据

export default class extends React.Component {
    render(){
        return (
            <React.Suspense fallback={<div>Error fallback</div>}>
                <Error />
            </React.Suspense>
        )
    }
}

function Error(){
    const [state, setState] = React.useState(false);
    if(state){
        throw Promise.reject(123);
        return <div>error</div>
    }
    return (
        <div>
            <button onClick={()=>{setState(true)}}>Throw Error</button>
        </div>
    )
}

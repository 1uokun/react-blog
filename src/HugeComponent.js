/* 假设一个巨大的组件需要被代码分割 */
import React from 'react'

console.log("HugeComponent");
export default class extends React.Component{
    render(){
        return (
            <div>HugeComponent</div>
        )
    }
}

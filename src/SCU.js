import React, { Component,Fragment } from 'react';

class A extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log("A SCU")
        // 当scu返回false时，React则不会继续向下查询子节点
        return false
    }

    render(){
        return (
            <div>
                <h1>A</h1>
                <AA/>
            </div>
        )
    }
}

class AA extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // 所以这里不会被执行
        console.log("AA SCU")
        return true
    }
    render(){
        return (
            <h2>AA</h2>
        )
    }
}

class B extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log("B SCU")
        return true
    }

    render(){
        return (
            <div>
                <h1>B</h1>
                <BB/>
            </div>
        )
    }
}

class BB extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log("BB SCU")
        // 虽然会执行到这里，但是通过diff对比后与之前渲染的相同
        // React则会跳过渲染
        return true
    }
    render(){
        return (
            <h2>BB</h2>
        )
    }
}

export default class SCU extends Component {
    render(){
        return (
            <Fragment>
                <A />
                <B />
            </Fragment>
        )
    }
}

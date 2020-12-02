import React, { Component,Fragment } from 'react';
import debounce from 'lodash.debounce'
import SCU from "./SCU";


export default class extends Component{
    state={
        value:""
    };

    componentWillMount(){
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    onChange=(e)=>{
        this.setState({value:e&&e.target&&e.target.value})
        console.log(e&&e.target&&e.target.value)
    };

    debounceChange=debounce(this.onChange,400);

    render(){
        return (
            <Fragment>
                <input type="text" value={this.state.value} onChange={this.onChange}/>
                <br/>

                {/** doest work and need to add `event.persist()` **/}
                <input type="text" value={this.state.value} onChange={this.debounceChange}/>
                <br/>

                {/** 缓存所需的属性 **/}
                <input type="text" value={this.state.value} onChange={({target:{ value }})=>this.debounceChange({target:{ value }})}/>
                <br/>

                <SCU />
            </Fragment>
        )
    }
}

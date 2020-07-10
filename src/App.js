import React, { Component,Fragment } from 'react';
import debounce from 'lodash.debounce'


export default class extends Component{
    onChange=(e)=>{
        console.log(e&&e.target&&e.target.value)
    };

    debounceChange=debounce(this.onChange,400);


    render(){
        return (
            <Fragment>
                <input type="text" onChange={this.onChange}/>

                {/** doest work and need to add `event.persist()` **/}
                <input type="text" onChange={this.debounceChange}/>

                {/** 缓存所需的属性 **/}
                <input type="text" onChange={({target:{ value }})=>this.debounceChange({target:{ value }})}/>
            </Fragment>
        )
    }
}

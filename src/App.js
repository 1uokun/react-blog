import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';

class A extends Component {
    // static propTypes = {
    //     name:PropTypes.string
    // }
    render(){
        return <div>{this.props.name}</div>
    }
}
A.propTypes = {
    name:PropTypes.string
}
class B extends Component {
    render(){
        return <div>qwe</div>
    }
}

export default class extends Component{
    render(){
        return (
            <Fragment>
                <A name={'asd'}/>
                <B />
            </Fragment>
        )
    }
}
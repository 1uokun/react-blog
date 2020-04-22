import React, { Component,Fragment } from 'react';

class ErrorBoundary extends React.Component {
    state={
        error:undefined,
        errorInfo:undefined
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error,errorInfo:errorInfo.componentStack})
    }

    render(){
        return this.state.error!==undefined&&this.state.errorInfo!==undefined?<div>
            <h1>Error Info</h1>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.errorInfo}
            </details>
        </div>:<div>
            {this.props.children}
        </div>
    }
}

class B extends Component {
    a=()=>{
        throw "asdasd"
    };

    render() {
        this.a();
        return (
            <div>asd</div>
        )
    }
}

export default class extends React.Component{
    render(){
        return (
            <Fragment>
                <ErrorBoundary>
                    <B />
                </ErrorBoundary>
            </Fragment>
        )
    }
}

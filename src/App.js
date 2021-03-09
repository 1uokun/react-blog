import React,{Component,lazy,Suspense} from 'react'
import Boundary from "./Boundary";

const LazyComponent = lazy(()=>import('./HugeComponent'));

class App extends React.Component {
    state={
        visible:false
    };
    handleShow=()=>{
        this.setState({visible:true})
    };
    render(){
        return (
            <div>
                <button onClick={this.handleShow}>show huge component</button>
                {this.state.visible&&<Suspense fallback={<div>loading...</div>}>
                    <LazyComponent />
                </Suspense>}

                <Boundary />
            </div>
        )
    }
}

export default App;

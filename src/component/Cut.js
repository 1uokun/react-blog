import React from 'react'
import {Consumer} from "../context";

class Cut extends React.Component {
    render(){
        return (
            <Consumer>
                {context=><button onClick={context.cut_life}>-1s</button>}
            </Consumer>
        )
    }
}

export default Cut

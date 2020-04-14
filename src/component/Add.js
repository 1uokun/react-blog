import React from 'react'
import {Consumer} from '../context'

class Cut extends React.Component {
    render(){
        return (
            <Consumer>
                {context=>{
                    return <button onClick={context.add_life}>+1s</button>
                }}
            </Consumer>

        )
    }
}

export default Cut

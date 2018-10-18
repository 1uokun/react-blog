import React from 'react'
import {Consumer} from '../context'

class Cut extends React.Component {
    render(){
        return (
            <Consumer>
                {value=>{
                    return <button onClick={value.add_life}>+1s</button>
                }}
            </Consumer>

        )
    }
}

export default Cut
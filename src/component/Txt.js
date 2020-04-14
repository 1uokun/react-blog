import React from 'react'
import {Consumer} from '../context/index'

class Txt extends React.Component {
    render(){
        return (
            <Consumer>
                {context=><div>{context.num}</div>}
            </Consumer>

        )
    }
}

export default Txt

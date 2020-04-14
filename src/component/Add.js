import React from 'react'
import {connect} from "../connect";

class Cut extends React.Component {
    render(){
        return (
            <button onClick={this.props.add_life}>+1s</button>
        )
    }
}


export default connect(Cut)

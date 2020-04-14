import React from 'react'
import {connect} from "../connect";

class Txt extends React.Component {
    render(){
        return (
            <div>{this.props.num}</div>
        )
    }
}

export default connect(Txt)

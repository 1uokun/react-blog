import React from 'react'
import {connect} from 'react-redux'
import {add_life} from '../actions/event'

class Cut extends React.Component {
    render(){
        return (
            <button onClick={this.props.add_life}>+1s</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        add_life : (params) => {
            dispatch(add_life(params))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cut)
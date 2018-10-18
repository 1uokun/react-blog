import React from 'react'
import {connect} from 'react-redux'
import {cut_life} from '../actions/event'

class Cut extends React.Component {
    render(){
        return (
            <button onClick={this.props.cut_life}>-1s</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        cut_life : (params) => {
            dispatch(cut_life(params))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cut)
import React from 'react'
import {connect} from 'react-redux'
import {add_life} from '../actions/event'

class Cut extends React.Component {
    handleClick=()=>{
        import("antd-mobile/lib/toast").then(Toast => {
            Toast.loading('Loading...', 1, () => {
                console.log('Load complete !!!');
            });
        });
        return this.props.add_life()
    };

    render(){
        return (
            <button onClick={this.handleClick}>+1s</button>
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
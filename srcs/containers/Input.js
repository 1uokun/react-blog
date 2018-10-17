import React from 'react'
import { connect } from 'react-redux'
import {actionFunc} from '../actions/write'

// //类型1
// const Input = ({dispatch})=> {
//     return (
//         <input
//             type="text"
//             ref={(input)=>{this.textInput = input}}
//             onChange={()=>dispatch(actionFunc(this.textInput.value))}
//         />
//     )
// }
// export default connect()(Input)

//类型2
class Input extends React.Component {
    render(){
        return (
            <input
                type="text"
                ref={(input)=>{this.textInput = input}}
                onChange={()=>this._onHandleEvent()}
            />
        )
    }
    _onHandleEvent(){
        const params = this.textInput.value;
        this.props.actionF(params)
    }
}

const mapStateToProps = (state) => {
    return {write : state.write}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionF : (params) => {
            dispatch(actionFunc(params))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input)
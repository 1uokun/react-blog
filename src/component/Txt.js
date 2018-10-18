import React from 'react'
import {connect} from "../connect";
const cut_life = ()=>{
    return 1
}

class Txt extends React.Component {
    render(){
        return (
            <div>{this.props.num}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        num : state.num
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        cut_life : (params) => {
            dispatch(cut_life(params))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Txt)

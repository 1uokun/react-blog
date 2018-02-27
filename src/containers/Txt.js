import React from 'react'
import { connect } from 'react-redux'

class Txt extends React.Component {
    render(){
        return (
            <div>
                {this.props.write.data}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        write : state.write
    }
}
export default connect(mapStateToProps)(Txt)

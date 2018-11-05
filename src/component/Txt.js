import React from 'react'
import { connect } from 'react-redux'
import MemoizedDemoComponent from './Memo'

class Txt extends React.Component {
    render(){
        return (
            <div>
                {this.props.life.loading?"十月名单加急处理中...":this.props.life.data}
                <MemoizedDemoComponent descr={"当前生命值："}/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        life : state.life
    }
}
export default connect(mapStateToProps)(Txt)

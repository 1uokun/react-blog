/* forceUpdate在SCU中的表现 */
import React from 'react'
import Add from "./Add";

export default class ForceUpdateBtn extends React.Component {
    constructor(props){
        super(props);
        this.update = this.update.bind(this);
    }

    update(){
        /**
         * this.forceUpdate
         *
         * ⚠️1：不能在dom上直接调用 onClick={this.forceUpdate}
         * 可以创建一个函数并使用bind绑定
         * 或者直接使用箭头函数 onClick={()=>this.forceUpdate()}
         *
         * ⚠️2：只会触发从当前组件开始的整棵树的lifecycle，除props.children(why?)
         * 如果scu返回false将不会更新（PureComponent)
         *
         * why参考link: https://zhuanlan.zhihu.com/p/313983390
         *
         * **/
        this.forceUpdate()
    }

    render(){
        return (
            <div>
                <Add />
                <br/>
                <button onClick={()=>this.forceUpdate()} onClickDoestWorkByThis={this.forceUpdate}>
                    force update
                </button>
            </div>

        )
    }
}

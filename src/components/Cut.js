import React from 'react'
import { observer, inject } from 'mobx-react';

// inject 向业务组件注入 store，actions，和 Provider 配合使用
// ⑤ 使用 inject decorator 和 observer decorator
@inject('store', 'actions')
@observer
export default class extends React.Component {
    render(){
        const { actions } = this.props;
        return (
            <button onClick={actions.cut_life}>-1s</button>
        )
    }
}
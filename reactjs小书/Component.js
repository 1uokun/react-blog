const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

class Component {
    //创建setState方法 public
    setState(state){
        this.oldEl = this.el;
        this.state = state;
        this.el = this._renderDOM()
        //供自组件使用onStateChange，调用setState时就重新渲染
        if (this.onStateChange) this.onStateChange(this.oldEl, this.el)
    }

    //创建_renderDOM方法 private渲染dom
    _renderDOM(){
        this.el = createDOMFromString(this.render())    //将子组件的render()内容放进来
        //监听事件
        if (this.onClick) {
            this.el.addEventListener('click', this.onClick.bind(this), false)
        }
        return this.el;
    }
}
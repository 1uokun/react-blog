## 目录
* branch:master <a href="#">reactjs小书笔记</a>
* branch:redux  <a href="#">redux笔记</a>
* branch:router  <a href="#">redux与router笔记</a>

## reactjs小书笔记
```javascript
//创建LikeButton类
class LikeButton {
    //创建render方法
    render(){
        return `
        <button id='like-btn'>
            <span className='like-text'>赞</span>
            <span>👍</span>
        </button> 
        `
    }
}
const wrapper = document.getElementById("root")
const likebutton = new LikeButton();
wrapper.innerHTML = likebutton.render();
```
```javascript
//从暴力的innerHTML优化为appendChild
//实现简单组件化
const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}
```
```javascript
class LikeButton {
    constructor () {
        this.state = { isLiked: false }
    }

    setState (state) {
        // // set
        // this.state = state
        // this.el = this.render()
        const oldEl = this.el
        this.state = state
        this.el = this.render()
        if (this.onStateChange) this.onStateChange(oldEl, this.el)
    }

    changeLikeText () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        this.el = createDOMFromString(`
    <button class='like-btn'>
      <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
      <span>👍</span>
    </button>
  `)
        this.el.addEventListener('click', this.changeLikeText.bind(this), false)
        return this.el
    }
}

    const wrapper = document.getElementById('root');
    const likebutton = new LikeButton();
    wrapper.appendChild(likebutton.render())
    //自动判断改变时刷新
    likebutton.onStateChange = (oldEl, newEl) => {
        wrapper.insertBefore(newEl, oldEl) // 插入新的元素
        wrapper.removeChild(oldEl) // 删除旧的元素
    }
```
### 抽象出公共组件类
```javascript
class Component {
    //public
    setState(state){
        this.state = state;
        //改变state时重新渲染
        this.oldEl = this.el;
        this.el = this._renderDOM()
        this.onStateChange(this.oldEl,this.el)
    }
    
    //private
    _renderDOM(){
        this.el = createDOMFromString(this.render())    //调用自组件的render()
        //添加事件
        //...
        return this.el;
    }
}

//高阶组件
const mount = (component,wrapper)=>{
    wrapper.appendChild(component._renderDOM())
    component.onStateChange = (oldEl,newEl) => {
        wrapper.insertBefore(newEl, oldEl)
        wrapper.removeChild(oldEl)
    }
}
```
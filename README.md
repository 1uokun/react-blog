## 目录
* branch:master <a href="#">reactjs小书笔记</a>
* branch:redux  <a href="./tree/redux">redux笔记</a>
* branch:router  <a href="./tree/router">redux与router实践</a>

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
### props.children 
> this.props.children`[i]`
```javascript
class Layout extends Component {
    render(){
        return (
            <header>
                {this.props.children[0]}
            </header>
            <article>
                {this.props.children[1]}
            </article>
            <footer>
                {this.props.children[2]}
            </footer>
        )
    }
}

//使用
<Layout>
    <header>
        <div>header</div>
    </header>
    <article>
        <div>article</div>
    </article>
    <footer>
        <div>footer</div>
    </footer>
</Layout>
```
### PropTypes
> import PropTypes from 'prop-types'
```javascript
import PropTypes from 'prop-types'
class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    }
    render(){
        const { comment } = this.props;
        return (
            //这里的comment被要求必须为Object
            <div>{comment.username}</div>
        ) 
    }
}
/*
PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string
PropTypes.node
PropTypes.element
...
*/
```
## 高阶组件
> 什么是高阶组件？
> 高阶组件就是一个`函数`，传给它一个组件，返回一个新的组件
```javascript
//脸庞1  const newComponent = ajaxWithData(Component,url)
function ajaxWithData(WrapperComponent,url){
    class NewComponent extends Component {
        state={data:null}
        
        componentDidMount(){
            fetch(url,{method:"get"})
            .then(res=>{
                this.setState({data:res})
            })
        }
        
        render(){
            return <WrapperComponent data={this.state.data} />
        }
    }
    return NewComponent
}

class A extends Component {
    render(){
        return (
            //渲染来自高阶组件封装好的ajax统一逻辑的数据
            <div>{this.props.data}</div>
        )
    }
}

const newA = ajaxWithData(A,"github.com")
export default newA;
```
> 链式函数 return组件本身 可避免创建新变量
```javascript
//脸庞2 Component = ajaxWithData(url)(Component)
const ajaxWithData = (url)=>(WrapperComponent)=>{
    //return 自己
    return class WrapperComponent extends Coponent {
        //...
        render(){
            return (
                <WrapperComponent data={this.state.data}/>
            )
        }
    }
}
```
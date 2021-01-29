## 书签
 -[Redux总结](https://github.com/dwqs/blog/issues/35)
 -[dva教程](https://www.jianshu.com/p/69f13e9123d9)
 
## react hook视频观后总结

#### motivation
>*" With hooks, we separate code not based on the lifecycle method name but based on what the code is doing* " -- Dan Abramov

首先，了解当前react存在的问题
**1.avoid wrapper hell**
避免包装函数嵌套太深，尽管可以使用mixins模式
**2.huge component**
组件太大，每一个功能都要写在life cycle内。他们希望未来功能能抽离出来，类似node_module直接import进来已达到重用效果。
**3.confusing classes**`$*&^!(%%!@ `
有时候注册一个事件（或一个定时器）之后，又需要在`componentWillUnmount`的时候去注销它
不知道什么时候使用function，什么时候使用class来创建组件

## API
 - [useState]()
 - [useEffect]()
 - [useContext]()

#### import
```javascript
import React, {useState,useContext,useEffect} from 'react'
```

#### useState
代替`setState`
before
```javascript
class MyCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'Niko'
        };
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(e){
        this.setState({name:e.target.name})
    }
    
    render(){
        return (
            <div>   
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
            </div>
        )
    }
}
```
after
```javascript
function MyCard(){
    const [name,setName] = userState('Niko')
    return (
        <div>   
            <input 
                type="text"
                value={name}
                onChange={setName(e.target.value)}
            />
        </div>
    )
}
```
优势：
当存在多个input时，我们需要添加多个state。使用hook可以将input的`value`和`onChange`这些逻辑抽离
```
function MyCard (){
    const firstName = useFormChange('Niko');
    const secondName = useFormChange('Bellic');
    return (
        <div>
            <span>{firstName.value}</span>
            <input type="text"
                   value={firstName.value}
                   onChange={firstName.onChange}
            />
            <br/>
            <span>{secondName.value}</span>
            <input type="text"
                   value={secondName.value}
                   onChange={secondName.onChange}
            />
        </div>
    )
}

function useFormChange(initialValue){
    const [value,setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value)
    }

    return {
        value,
        onChange:handleChange
    }
}
```

#### useEffect
随时监听state变化
before
```javascript
class MyCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'Niko',
        };
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    
    componentDidMount(){
        document.title = this.state.name;
    }
    
    componentWillUpdate(){
        document.title = this.state.name
    }
    
    handleNameChange(e){
        this.setState({name:e.target.name})
    }
    
    render(){
        return (
            <div>   
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />                
            </div>
        )
    }
}
```
after
```javascript
function MyCard(){
    const [name,setName] = useState('Niko')
    
    useEffect=(()=>{
        document.title = name
    })
    
    return (
        <div>   
            <input 
                type="text"
                value={name}
                onChange={setName(e.target.name)}
            />
        </div>
    )
}
```
`useEffect`返回值还可以实现`componentWillMount`
```javascript
useEffect(
    ()=>{window.addEventListener('resize',handleSizeChange)}
    return ()=>{
        window.removeEventListener('resize')
    }
)
```


#### useContext
其实在更新`Context API`就已经提出了`hook`这一说法，
所以这里也顺便记下`useContext`用法

before
```javascript
import { ThemeContext } from './context'

class MyCard extends React.Component {
    render(){
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className="theme"></div>   
                )}
            </Card.Provider>
        )
    }
}
```
after
```javascript
import { ThemeContext } from './context'

function MyCard(){
    const theme = useContext(ThemeContext)
    
    return (
        <div className={theme}>
            //...   
        </div>
    )
}
```

## 最后
建议观看[视频](https://www.youtube.com/watch?v=dpw9EHDh2bM&t=4912s)，食用更加

# React Hook的体系设计之一 - 分层

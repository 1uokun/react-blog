## 书签
 -[Redux总结](https://github.com/dwqs/blog/issues/35)
 -[dva教程](https://www.jianshu.com/p/69f13e9123d9)
 
## react hock视频观后总结

#### UseAge
```javascript
import React, {useState,useContext,useEffect} from 'react'
```

#### useState
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

#### useEffect
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
其实在更新`Context API`就已经提出了`hock`这一说法，
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
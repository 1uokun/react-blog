## 目录
* branch:master <a href="#">reactjs API速览</a>
* branch:redux  <a href="https://github.com/1uokun/react-dom-cli/tree/redux">redux笔记</a>
* branch:redux-persist    <a href="https://github.com/1uokun/react-dom-cli/tree/redux-persist">redux与数据持久化</a>
* branck:mobx   <a href="https://github.com/1uokun/react-dom-cli/tree/mobx">mobx笔记</a>
* branch:router  <a href="https://github.com/1uokun/react-dom-cli/tree/router">redux与router实践</a>
* branch:typescript    <a href="https://github.com/1uokun/react-dom-cli/tree/typescript">TypeScript语言下的react组件写法</a>
* branch:react-hook <a href="https://github.com/1uokun/react-dom-cli/tree/react-hook">react hook视频观后感</a>
* branch:context <a href="https://github.com/1uokun/react-dom-cli/tree/context">context connect</a>

## 相关博客

- [ReactJS常用API快速一览](https://github.com/1uokun/react-dom-cli/issues/1)
- Mobx工程化之--store和action集成与拆分 [commit](https://github.com/1uokun/react-dom-cli/commit/4890714d4a1fdc2d2a8d04fe0162a12817b280a1)
- [redux与promise api工程化实战-并发请求](https://github.com/1uokun/react-dom-cli/issues/2)

## API
### React.createContext
```jsx harmony
const MyContext = React.createContext(defaultValue);
```
仅当组件在树中上方没有匹配到提供者`Provider`时才使用`defaultValue`参数。
这对于隔离测试组件而不进行包装很有帮助。
注意：`defaultValue`值设为`undefined`将忽略赋值。
 - 例如：

```jsx harmony
import React from 'react';

const MyContext = React.createContext({
  name:"Niko"
});

// 形态一
class NoProvider extends React.Component {
    static contextType = MyContext;
    render(){
        return (
            <h1>{this.context.name}</h1>
        )
    }
}
// 形态二
class NoProviderWithConsumer extends React.Component {
    render(){
        return (
            <MyContext.Consumer>
                {value=><h1>{value.name}</h1>}
            </MyContext.Consumer>
        )
    }
}
// 形态三
const NoProviderWithHook = () => {
    const value = useContext(MyContext);
    return value.name;
};



export default class extends React.Component {
    render(){
        return (
            <div>
                <NoProvider />
                <NoProviderWithConsumer />
                <NoProviderWithHook />
            </div>
        )
    }
}
```

### MyContext.displayName
用于DevTools显示MyContext组件名
```jsx harmony
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```

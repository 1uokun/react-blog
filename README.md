## virtual-dom
## virtual-dom/h
```javascript
return new VNode(tag, props, childNodes, key, namespace)
```
 - VNode


## PureComponent
当`shouldComponentUpdate`返回`true`时，React必须走到
该节点并检查它们。当diff后发现元素不相等，因此React必须更新DOM。

当diff没有变化时，利用thunk可以使它不必更新DOM

在PureComponent中，`shouldComponentUpdate`只是对`props`的值进行浅对比
因此避免此问题的最简单方法是避免你正在使用的`state`或`props`值突变（mutating）
即使用`immutable`,相关库有`immutable.js`、`immutability-helper`

同理`React.memo()`

## setState
setState对于相同的键，总是执行最后一个的setState

> setState(stateChange[, callback])

```javascript
const words = this.state.words;
words.push('marklar');
this.setState({words: [...words,'marklar']});
this.setState({words: words}); //总是执行这一步，所以对于PureComponent不会更新
```
对于可mutate的数据结构也是如此
```javascript
// assuming this.state = { value: 0 };
this.setState({value:this.state.value+1})
this.setState({value:this.state.value+1})
this.setState({value:this.state.value+1})

//调用结果为
this.state.value // 1
```
对于这种情况可以传function作为parameter，文档提到`setState accepts a function as its parameter`

> setState(updater, callback)
> (state, props) => stateChange

```javascript
// assuming this.state = { value: 0 };
this.setState((state) => ({ value: state.value + 1}));
this.setState((state) => ({ value: state.value + 1}));
this.setState((state) => ({ value: state.value + 1}));

//调用结果为
this.state.value // 3
```

`setState()`将对组件state的更改**排入队列**，并通知React需要使用更新后的state重新渲染此组件及其子组件。

将`setState()`视为**请求**而不是立即更新组件的命令。
为了更好的感知性能，React会延迟调用它，然后通过一次传递更新多个组件。
**React并不会保证state的变更会立即生效。**

`setState()`并不总是立即更新组件。它会批量推迟更新。
这使得在调用`setState()`后立即读取`this.state`成为了隐患。
为了消除隐患，请使用`componentDidUpdate`或者`setState`的**回调函数**(`setState(updater, callback)`)
这两种方式都可以保证在应用更新后出发。

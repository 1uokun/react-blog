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

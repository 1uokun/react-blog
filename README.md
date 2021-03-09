# <Suspense> + React.lazy 实现代码分割和懒加载
```jsx harmony
const LazyComponent = React.lazy(()=>import("../PDF"));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

# <Suspense> + Error Boundary 简化异步组件状态

> https://zhuanlan.zhihu.com/p/75459179

`Suspense`除了能包裹Lazy组件，还能检测到错误的组件并在`fallback`中回调

```jsx harmony
<React.Suspense fallback={<div>Error fallback</div>}>
  <Error />
</React.Suspense>

function Error(){
    const [state, setState] = React.useState(false);
    if(state){
        throw Promise.reject(123);
        return <div>error</div>
    }
    return (
        <div>
            <button onClick={()=>{setState(true)}}>Throw Error</button>
        </div>
    )
}
```

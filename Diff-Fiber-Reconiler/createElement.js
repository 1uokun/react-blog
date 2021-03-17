/**
 * createElement
 * @code
 *
 * React.createElement(Context.Provider,{value:...},
 *   React.createElement('div', {className: ...},
 *      React.createElement(Header),
 *      React.createElement(Content)
 *   )
 * )
 *
 * @params fiber:{ return:父节点, child:第一个子节点, sibling:第一个兄弟节点 }
 * **/
function createElement(type, props, ...children){
    let vnode = {
        type,
        props,
        children,
        key: props.key,

        $parent: null, //return父节点
        $child: null,
        $sibling: null,

        $el: null
    };

    let firstChild;
    vnode.children = children.map((child, index)=>{
        if(typeof child === 'string'){
            // ...处理文本节点
        }else {

            child.$parent = vnode;// 每个子节点保存对父节点的引用

            if(!firstChild){

                vnode.$child = child; // 父节点保存对于第一个子节点的引用

            }else {

                firstChild.$sibling = child // 保存对于下一个兄弟节点的引用

            }

            firstChild = child;
        }

        return child
    });

    return vnode;
}

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
 * **/
function createElement(type, props, ...children){
    let vnode = {
        type,
        props,
        children,
        key: props.key,
        $el: null
    };

    return vnode;
}

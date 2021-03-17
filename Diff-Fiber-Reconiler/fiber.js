/**
 * fiber:{  } 链表结构
 *
 * **/
function createFiber(type,props,children){
    let vnode = {
        type,
        props,
        key:props.key,
        $el: null
    }

    let firstChild;
    vnode.children = children.map((child, index)=>{

        child.$parent = vnode;
        if(!firstChild){
            vnode.$child = child
        }else {
            firstChild.$sibling = child;
        }
        firstChild = child;
        return child;
    })
}

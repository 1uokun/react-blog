/**
 * @function patch
 * @function doPatch
 *
 * **/
function patch(node){
    if(!node) return;
    //前序遍历，从根节点开始patch操作
    doPatch(node);

    node.children.forEach(child=>{
        patch(child)
    })
}

function doPatch(node){
    let patches = node.patches;
    if(!patches || !patches.length) return;

    const handlers = {
        [REMOVE]: function removeChild(parent, oldNode, newNode){
            parent.$el.removeChild(oldNode.$el)
        },
        [REPLACE]: function replaceChild(parent, oldNode, newNode){
            let _parent = oldNode.parent.$el;
            let _target = oldNode.$el;

            newNode.$el = createDOM(node);
            parent.insertBefore(newNode.$el, target)
        }
    }
}

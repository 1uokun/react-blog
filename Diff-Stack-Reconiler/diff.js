/**
 * 递归实现diff算法
 *
 * @function diff 对比同层级节点
 * @function diffChildren 对比子节点
 *
 * @param node:{ type, children:node, props } 树结构
 * @param oldNode:{ parent:node, patches:patch[] } 公共父节点下保存oldNode和newNode,patches保存差异
 * **/

const [REMOVE, REPLACE, INSERT, UPDATE] = [0,1,2,3];

function diff(oldNode, newNode){
    let patch;
    if(!newNode){//旧节点及其子节点都将移除
        patch = {type: REMOVE, oldNode}
    }else if(!oldNode){//插入新节点
        patch = {type: INSERT, newNode};
    }else if(oldNode.type !== newNode.type){//替换不同类型的节点
        patch = {type: REPLACE, oldNode, newNode}
    }else {
        if(diffAttr(oldNode.props, newNode.props)){
            patch = {type: UPDATE, oldNode, newNode}
        }

        //继续比较子节点
        diffChildren(oldNode.children, newNode.children)
    }

    // 将更新保存在节点的patches属性上
    // 旧节点的删除需要保存在新旧节点公共父节点上
    let node = newNode || oldNode.parent;
    if(!node.patches){
        node.patches = [];
    }
    patch && node.patches.push(patch)
}

/**
 * diffChildren 递归对比子节点
 * **/
function diffChildren(oldChildren, newChildren){
    let count;//newChildren大于old时，进行插入操作
    //依次比较旧的子节点列表和新的子节点列表
    if(oldChildren && oldChildren.length){
        oldChildren.forEach((child, index)=>{
            count++;
            diff(child, (newChildren && newChildren[index])||null)
        })
    }

    // 如果还有未比较的新节点，继续进行diff将其标记为INSERT
    if(newChildren && newChildren.length){
        for(;count < newChildren;count++){
            diff(null, newChildren[count])
        }
    }
}

/**
 * diffAttr 对比节点的属性
 * **/
function diffAttr(){

}

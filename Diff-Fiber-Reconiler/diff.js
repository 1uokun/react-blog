/**
 * 循环实现diff算法
 *
 * @function scheduleWork
 * @function workLoop
 * @function diff
 *
 * @param fiber: [return:父节点, child:第一个子节点, sibling:下一个兄弟节点]
 * **/
let workInProgress, currentWorkRoot;

function scheduleWork(fiberRoot){
    workInProgress = fiberRoot;
    currentWorkRoot = fiberRoot;

    //浏览器在空闲期间会持续调用workLoop，
    // 从workInProgress开始继续diff
    requestHostCallback(workLoop)
}

function workLoop(){
    while(workInProgress){
        if(shouldYield()){
            // 当前时间切片已用过，但diff流程未结束
            // 浏览器会在合适的时机继续调用workLoop
            return true;
        }else {
            // 可以继续进行一下个节点的diff
            workInProgress = performUnitWork(workInProgress);
        }
    }
}

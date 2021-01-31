/* reducer重写HookCounter */
import React,{useReducer} from 'react'

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const JUMPDISPATCH = '跳过dispatch';
export function useCounterReducer(){
    const reducer = function(state, action){
        switch (action.type) {
            case INCREMENT:
                return {...state,count:state.count+1};
            case DECREMENT:
                return {...state,count:state.count-1};
            case JUMPDISPATCH:
                return action.payload;
            default:
                return state;
        }
    };
    const initialState = {count:1,obj:{name:"",age:0}};
    return useReducer(reducer, initialState);

    //模拟forceUpdate
    const [ignore, forceUpdate] = useReducer(x => x+1,0);
}

/**
 * reduce原始用法
 * ```
 *  const finalState = Array.prototype.reduce.call(
 *      actionList,
 *      reducer,
 *      initialState
 *  );
 * ```
 **/

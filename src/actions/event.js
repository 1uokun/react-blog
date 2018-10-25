import * as type from './index'

// //action creators 类型1
// export const actionFunc = (params)=>({
//     type : type.INPUT_TXT,
//     payload : params
// })

//类型2
export function cut_life(params){
    return {type:type.CUT_LIFE,payload:params}
}

export function add_life(params){
    return {type:type.ADD_LIFE,payload:params}
}
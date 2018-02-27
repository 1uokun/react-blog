import * as type from '../constants/types'

// //action creators 类型1
// export const actionFunc = (params)=>({
//     type : type.INPUT_TXT,
//     payload : params
// })

//类型2
export function actionFunc(params){
    return {type:type.INPUT_TXT,payload:params}
}
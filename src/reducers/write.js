import {INPUT_TXT} from "../constants/types";

//reducers一般一个文件里只放 1 个func
export default function(state,action){
    state = {
        data : ''
    }
    switch(action.type){
        case INPUT_TXT:
            return {data:action.payload};
        default:
            return state
    }
}
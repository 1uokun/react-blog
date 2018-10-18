import {CUT_LIFE, ADD_LIFE} from "../stores/types";

const initialState = {
    data: 1,
};


//reducers一般一个文件里只放 1 个func
export default function(state=initialState,action){
    console.log(action)
    switch(action.type){
        case ADD_LIFE:
            return {data:state.data+=1};
        case CUT_LIFE:
            return {data:state.data-=1};
        default:
            return state
    }
}
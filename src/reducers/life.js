import {CUT_LIFE, ADD_LIFE, LOADING_STATE} from "../actions";

export default function(state={},action){
    switch(action.type){
        case ADD_LIFE:
            return {...action.payload};
        case CUT_LIFE:
            return {...action.payload};
        case LOADING_STATE:
            return {...action.payload};
        default:
            return {data:0,loading:false}
    }
}
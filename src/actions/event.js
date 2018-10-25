import {ADD_LIFE,CUT_LIFE,LOADING_STATE} from "./index";
let state = {
    data:0,
    loading:false
};

function asyncEvent1(){
    return new Promise(resolve => {
        setTimeout(function(){
            state.data+=1;
            state.loading=false;
            resolve(state)
        },2000)
    })
}

function asyncEvent2(){
    return new Promise(resolve => {
        setTimeout(function(){
            state.data-=1;
            state.loading=false;
            resolve(state)
        },1000)
    })
}

function loadingState(){
    state.loading=true;
    return {type: LOADING_STATE, payload:state}
}

export function add_life(params) {
    return dispatch=>{
        dispatch(loadingState());
        Promise.all([asyncEvent1()]).then(function(values) {
            dispatch({type: ADD_LIFE, payload:Object.assign(...values)})
        });
    }
}

export function cut_life(params) {
    return dispatch=>{
        dispatch(loadingState());
        Promise.all([asyncEvent2()]).then(function(values) {
            dispatch({type: CUT_LIFE, payload:Object.assign(...values)})
        });
    }
}
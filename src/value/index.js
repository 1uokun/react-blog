const initState = {
    data:1
}

export const value = {
    num:initState.data,
    add_life : function(){
        value.num+=1
        console.log(value)
    }
};
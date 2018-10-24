const initialState = {
    isLoggedIn: false,//是否登录
};

export default function user(state = initialState, action) {
    if(action.type === 'User/Login'){
        state = action.payload;
        return { ...state, isLoggedIn: true };
    }
    else if(action.type === 'User/Logout'){
        return { isLoggedIn: false };
    }
    else{
        return state;
    }
}

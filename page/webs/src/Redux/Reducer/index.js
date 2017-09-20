import {GET_LOGIN_START , GET_LOGIN_SUCCESS} from '../Action/index'  //登录
export const getLoginData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_LOGIN_START:
            return Object.assign({},state,action);
        case GET_LOGIN_SUCCESS:
            return Object.assign({},state,action);            
        default:                                          
            return state;
    }
}
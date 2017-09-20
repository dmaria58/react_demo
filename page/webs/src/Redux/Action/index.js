export const GET_LOGIN_START = 'GET_LOGIN_START';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
//开始登录
const getLoginStart = (path,data) => {
  return {
    type: GET_LOGIN_START,
    data,
    path
  }
}

//登录成功
const getLoginSuccess = (path, data) => {
  return {
    type: GET_LOGIN_SUCCESS,
    path ,
    data
  }
}
  //登录
export const getLogin = (path, postData) => {   
    return dispatch => {
        dispatch(getLoginStart(path,"start"))
        setTimeout(function(){
        	if(path=="login"&&postData.password=="1"&&postData.username=="maria"){
       			dispatch(getLoginSuccess(path,"success"))
        	}
        	else{
        		dispatch(getLoginSuccess(path,"fail"))
        	}
        },2000);
    }
}
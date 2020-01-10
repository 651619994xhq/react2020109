/**
 * @description 这个相当于vuex 的 异步 action
 */
import {setUser} from "./userAction";

export const TYPES={
    LOGIN:'LOGIN', //登录
    EXIT_LOGIN:'EXIT_LOGIN', //退出登录
}

let fetchApi=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('我登录成功了')
        },2000)

    });
};

// 这里采用了promise 的写法  比较合适，action 里面写业务逻辑
export const login=()=>{
    return async dispatch=>{
        let data=await fetchApi();
        console.log('data==>',data);
        dispatch({
           type:TYPES.LOGIN,
           data
        });
        dispatch(setUser({msg:'我登录了'}))

    }


};
//退出登录
export const exitLogin=()=>({type:TYPES.EXIT_LOGIN});

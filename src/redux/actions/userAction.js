/**
 * @description 这个相当于vuex mumation
 * @type {{SET_USER: string, UPDATE_USER: string, GET_USER: string, DEL_USER: string}}
 */
export const TYPES={
    SET_USER:'SET_USER',  //设置
    GET_USER:'GET_USER',  //获取
    DEL_USER:'DEL_USER',  //删除
    UPDATE_USER:'UPDATE_USER', //跟新
}

export const setUser = data=>({type:TYPES.SET_USER,data});
export const getUser = ()=>({type:TYPES.GET_USER});
export const delUser = ()=>({type:TYPES.DEL_USER});
export const updateUser = data=>({type:TYPES.UPDATE_USER,data});
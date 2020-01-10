/**
 * @description 这个reducers 相当于vuex store
 */
import {TYPES} from "../actions/userAction";
//默认的初始化数据
const initialState={
    token:'123',
    userId:'123456',
    nickName:'xhq'
};

//这个是user 的store数据
export default (state = initialState, action)=>{
    switch (action.type) {
        case TYPES.SET_USER:
            console.log('user==>',action);
            return {...state,...(action.data||{})}
        case TYPES.GET_USER:
            return {...state}
        case TYPES.DEL_USER:
            return {}
        case TYPES.UPDATE_USER:
            return {...state,...(action.data||{})}
        default:
            return state
    }
}
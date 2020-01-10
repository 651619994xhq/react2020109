import {TYPES} from "../actions/userStatusAction";
//默认的初始化数据
const initialState={
};

//这个是user 的store数据
export default (state = initialState, action)=>{
    switch (action.type) {
        case TYPES.LOGIN:
            console.log('我登录了')
            return {}
        case TYPES.EXIT_LOGIN:
            console.log('我退出dengue')
            return {}
        default:
            return state
    }
}
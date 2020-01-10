import { combineReducers } from 'redux'
import user from './userReducer'
import userStatus from './userStatusReducer';


const rootReducer = combineReducers({
    user,
    userStatus,
})

export default rootReducer
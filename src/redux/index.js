import thunkMiddleware from 'redux-thunk'  //导入redux-thunk 处理异步数据流
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/index';

let store=createStore(reducers, applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数 允许异步动作
));

export default store;

/**
 * @description 这是一个初始化的类 在这里可以初始化 react
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import '@/index.css';
import App from '@/App';
import store from '@/redux/index'
import * as serviceWorker from '@/serviceWorker';
class InitManager {
    static init(){
        InitManager.initReact();
    }
    static initReact(){
        //打开观察中间件
        const unsubscribe = store.subscribe(() => {
            console.log(  'subscribe==>',store.getState());
        });
        ReactDOM.render(<Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root'));
        //停止
        // unsubscribe();
        serviceWorker.unregister();
    }

}

export default InitManager
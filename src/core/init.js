/**
 * @description 这是一个初始化的类 在这里可以初始化 react
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import FastClick from 'fastclick';
import '@/common/css/base.scss'
import './antd';
import '@/index.css';
import App from '@/App';
import store from '@/redux/index'
import * as serviceWorker from '@/serviceWorker';
class InitManager {
    /**
     * 初始化类
     */
    static init(){
        InitManager.initFastClick();
        InitManager.initReact();
    }

    /**
     * 初始化react 对象
     */
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

    /**
     * 初始化fastclick 解决移动端点击延迟的问题
     */
    static initFastClick(){
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
            }, false);
        }
    }

}

export default InitManager
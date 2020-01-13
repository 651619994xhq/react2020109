/**
 * @description 这是路由文件
 */
import React from "react";
import Loadable from 'react-loadable'; //这个是对路由懒加载


// const loadable = (dirname) => Loadable({
//     loader: () => import(`@page/${dirname}/index.jsx`),
//     loading: () => (<div></div>),
// })
// const loadable = (dianame)=>import(`@page/${dirname}/index.jsx`)
import login from '@page/login/index.jsx';
import home from '@page/home/index.jsx';
import detail from '@page/detail/index.jsx';
import mine from '@page/mine/index.jsx';


// const routers=[
//     {
//         path:'/login',
//         exact:true,
//         component:loadable('login')
//     },
//     {
//         path:'/home',
//         exact:true,
//         component:loadable('home')
//     },
//     {
//         path:'/mine',
//         exact:true,
//         component:loadable('mine')
//     },
//     {
//         path:'/detail',
//         component:loadable('detail')
//     },
//
// ]


const routers = [
    {
        path: '/login',
        exact: true,
        component: login,
        sceneConfig:{
            index:2
        }
    },
    {
        path: '/home',
        exact: true,
        component: home,
        sceneConfig: {
            enter: 'from-bottom',
            exit: 'to-bottom',
            index:3
        }
    },
    {
        path: '/mine',
        exact: true,
        component: mine,
        sceneConfig: {
            enter: 'from-right',
            exit: 'to-right',
            index:4
        }
    },
    {
        path: '/detail',
        component: detail,
        exact: true,
        sceneConfig: {
            enter: 'from-right',
            exit: 'to-right',
            index:5
        }
    }
];

export default routers;
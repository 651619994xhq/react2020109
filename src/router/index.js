/**
 * @description 这是路由文件
 */
import React from "react";
// import Loadable from 'react-loadable'; //这个是对路由懒加载


// const loadable = (dirname) =>Loadable({
//     loader: ()=> import(`@page/${dirname}/index.jsx`),
//     loading:() => (<div style={{position:'fixed',top:0,left:0}}></div>),
//     timedOut:5000
// })
import login from '@page/login/index.jsx'
import home from '@page/home/index.jsx'
import mine from '@page/mine/index.jsx'

const routers=[
    {
        path:'/login',
        exact:true,
        component:login
    },
    // {
    //     path:'/detail',
    //     component:loadable('detail'),
    // },
    {
        path:'/home',
        component:home
    },
    {
        path:'/mine',
        component:mine
    }
]

export default routers;
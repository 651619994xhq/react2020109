/**
 * @description 这是路由文件
 */
import React from "react";
import Loadable from 'react-loadable'; //这个是对路由懒加载


const loadable = (dirname) =>Loadable({
    loader: ()=> import(`@page/${dirname}/index.jsx`),
    loading:() => (<div></div>),
})


const routers=[
    {
        path:'/login',
        exact:true,
        component:loadable('login')
    },
    {
        path:'/home',
        exact:true,
        component:loadable('home')
    },
    {
        path:'/mine',
        exact:true,
        component:loadable('mine')
    },
    {
        path:'/detail',
        component:loadable('detail')
    }
]

export default routers;
/**
 * @description 这是路由文件
 */
import Loadable from 'react-loadable'; //这个是对路由懒加载

const loadable = (dirname) =>Loadable({
    loader: ()=> import(`@page/${dirname}/index.jsx`),
    loading:() => ('')
})

const routers=[
    {
        path:'/login',
        exact:true,
        component:loadable('login')
    },
    // {
    //     path:'/detail',
    //     component:loadable('detail'),
    // },
    {
        path:'/home',
        component:loadable('home')
    },
    {
        path:'/mine',
        component:loadable('mine')
    }
]

export default routers;
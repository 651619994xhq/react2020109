/*
 * @Description: 
 * @Author:  bean^ <bean_4@163.com>
 * @Date: 2020-01-14 11:33:38
 * @LastEditors:  bean^ <bean_4@163.com>
 * @LastEditTime: 2020-01-14 12:14:32
 */
import Loadable from "react-loadable";
import bus from '@page/bus/index.jsx';
import car from '@page/car/index.jsx';
const loadable = (filename) => Loadable({
    loader: () => import(`@page/${filename}/index.jsx`),
    loading: () => ('')
})

const routers = [
    {
        path: '/detail/bus',
        component: bus
    },
    {
        path: '/detail/car',
        component: car,
    }
]

export default routers;
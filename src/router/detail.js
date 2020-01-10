import Loadable from "react-loadable";

const loadable = (filename) =>Loadable({
    loader: ()=> import(`@page/${filename}`),
    loading:() => ('')
})

const routers=[
    {
        path:'/detail',
        redirect:'/detail/bus'
    },
    {
        path:'/detail/bus',
        exact:true,
        component:loadable('bus')
    },
    {
        path:'/detail/car',
        exact:true,
        component:loadable('car'),
    }
]

export default routers;
import Loadable from "react-loadable";

const loadable = (filename) =>Loadable({
    loader: ()=> import(`@page/${filename}/index.jsx`),
    loading:() => ('')
})

const routers=[
    {
        path:'/detail/bus',
        component:loadable('bus')
    },
    {
        path:'/detail/car',
        component:loadable('car'),
    }
]

export default routers;
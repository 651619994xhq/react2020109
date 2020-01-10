import React,{Component} from "react";
import {   BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    Switch,
    withRouter, } from 'react-router-dom'

import routers from "../router/detail";


class Detail extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (<div>
                this is detail page

                            {
                                routers.map((route,index) => {
                                    if(route.redirect){
                                        return  (<Route key={index} path={route.path} render={()=>(<Redirect to={route.redirect} />)} />)
                                    }
                                    return(
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}/>
                                    )
                                })
                            }
            </div>
        )
    }

}

export default Detail
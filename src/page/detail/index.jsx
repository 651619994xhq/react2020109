import React,{Component} from "react";
import {Button} from 'antd-mobile'
import {
    Route,
    Redirect,
    Switch
     } from 'react-router-dom'

import routers from "../../router/detail";


class Detail extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {

    }
    handleGoToPage(pathname){
        this.props.history.push(pathname)
    }

    render() {
        return (<div>
                <Button size="small" type="primary"  style={{width:'100px',margin:'20px auto'}} onClick={this.handleGoToPage.bind(this,'/detail/bus')}>bus</Button>
                <Button size="small" type="warning" style={{width:'100px',margin:'20px auto'}} onClick={this.handleGoToPage.bind(this,'/detail/car')}>car</Button>
            <Switch>
                {
                    routers.map((route,index) => {
                        return(
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}/>
                        )
                    })
                }
            </Switch>
            </div>
        )
    }

}

export default Detail
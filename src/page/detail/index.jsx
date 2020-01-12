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
        console.log('detail is run');

    }
    handleGoToPage(pathname){
        this.props.history.push(pathname)
    }
    handleBackPage=()=>{
        this.props.history.goBack();
    }

    render() {
        return (<div className={'container'}>
                <Button size="small" type="primary"  style={{width:'100px',margin:'20px auto'}} onClick={this.handleGoToPage.bind(this,'/detail/bus')}>bus</Button>
                <Button size="small" type="warning" style={{width:'100px',margin:'20px auto'}} onClick={this.handleGoToPage.bind(this,'/detail/car')}>car</Button>
                <Button size="small" type="warning" style={{width:'100px',margin:'20px auto'}} onClick={this.handleBackPage}>返回</Button>
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
                <Redirect
                    to={{
                        pathname: "/detail/bus",
                    }}
                />
            </Switch>
            </div>
        )
    }

}

export default Detail
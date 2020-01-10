import React,{Component} from "react";
import {encodeQuery} from "@lib/utils";

class Login extends Component{
    constructor(props){
        super(props);
    }
    handleClick=()=>{
        console.log('this is ',this);
        console.log(this.props)
        this.props.history.push({ pathname : '/home',search:encodeQuery({a:123}) })
        // this.props.history.push({ pathname : '/detail/bus',query:encodeQuery({a:123}) })
        // this.props.history.push({ pathname : '/detail/bus',state:encodeQuery({a:123}) })
    }
    render() {
        return (<div onClick={this.handleClick}>
                this is login page
            </div>
        )
    }

}

export default Login
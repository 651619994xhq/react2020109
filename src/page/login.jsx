import React,{Component} from "react";
import {encodeQuery} from "@lib/utils";

class Login extends Component{
    constructor(props){
        super(props);
    }
    handleClick=()=>{
        console.log('this is A ',this);
        console.log(this.props)
        // this.$loading({content:'loading'});
        //  console.log(this.$loading);
        this.$loading('',0)
        // setTimeout(()=>{
        //     this.$hideLoading();
        // },3000)
        // this.props.history.push({ pathname : '/home',search:encodeQuery({a:123}) })
        // this.props.history.push({ pathname : '/detail/bus',query:encodeQuery({a:123}) })
        // this.props.history.push({ pathname : '/detail/bus',state:encodeQuery({a:123}) })
        // this.$toast('244423423')
    }
    render() {
        return (<div onClick={this.handleClick}>
                this is login page
            </div>
        )
    }

}

export default Login
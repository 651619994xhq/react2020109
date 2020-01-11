import React,{Component} from "react";
import {decodeQuery} from "@lib/utils";

class Home extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log('home==>',decodeQuery(this.props.location.search))
    }
    handleClick=()=>{
        this.props.history.push({pathname:'/detail'})
    }
    render() {
        return (<div onClick={this.handleClick}>
                this is Home page
            </div>
        )
    }

}

export default Home
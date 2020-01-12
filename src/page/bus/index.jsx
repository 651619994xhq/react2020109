import React,{Component} from "react";
class Bus extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log('bus is run')
        console.log(this.props)
    }

    render() {
        return (<div>
                this is bus page
            </div>
        )
    }

}

export default Bus
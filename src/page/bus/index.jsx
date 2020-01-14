import React, { Component } from "react";
import { Button } from 'antd-mobile'

class Bus extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('bus is run')
        console.log(this.props)
    }

    render() {
        return (<div>
            this is bus page
            <Button size="small" type="primary" onClick={this.props.history.goBack} style={{ width: '100px', margin: '20px auto' }}>返回</Button>
            <Button size="small" type="warning" style={{ width: '100px', margin: '20px auto' }} onClick={() => this.props.history.push('/home')}>跳转到home页</Button>
        </div>
        )
    }

}

export default Bus
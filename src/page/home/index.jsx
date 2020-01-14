import React, { Component } from "react";
import { Button } from 'antd-mobile'
import { decodeQuery } from "@lib/utils";
import styles from './index.module.scss';
import { CS } from '@/lib/helper';
let cs = new CS(styles);

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('home is run')
        // console.log('home==>',decodeQuery(this.props.location.search))

    }
    handleClick = () => {
        // this.props.history.push({pathname:'/detail'})
        this.props.history.goBack();
    }
    handleGoToDetail = () => {
        this.props.history.push('/detail')
    }
    render() {
        return (<div className={cs.m('container')}>
            <Button size="small" type="primary" onClick={this.props.history.goBack} style={{ width: '100px', margin: '20px auto' }}>返回</Button>
            <Button size="small" type="primary" onClick={this.handleGoToDetail} style={{ width: '100px', margin: '20px auto' }}>详情页</Button>
        </div>
        )
    }

}

export default Home
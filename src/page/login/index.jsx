import React,{Component} from "react";
import {Button} from 'antd-mobile';
import {encodeQuery} from "@lib/utils";
import styles from './index.module.scss';
import {CS} from '@/lib/helper';
let cs=new CS(styles);
//目前react写css 大概3种方式
//1.css in js 这种更像js 写法
//2.css-module 侵入性更小一点
//3.模块命名法解决
//本人更偏向于css-module

class Login extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log('login is run');
    }
    componentWillUnmount(){

    }

    handleClick=()=>{
        // console.log('this is A ',this);
        // console.log(this.props)
        // this.$loading({content:'loading'});
        //  console.log(this.$loading);
        // this.$loading('',0)
        // setTimeout(()=>{
        //     this.$hideLoading();
        // },3000)
        this.props.history.push({ pathname : '/home',search:encodeQuery({a:123}) })
        // this.props.history.push({ pathname : '/detail/bus',query:encodeQuery({a:123}) })
        // this.props.history.push({ pathname : '/detail/bus',state:encodeQuery({a:123}) })
        // this.$toast('244423423')
    }
    render() {
        return (<div className={cs.m('container')} >
                <Button type="warning" size="small" style={{width:'100px',margin:'20px auto'}} onClick={this.handleClick}>登录</Button>
            </div>
        )
    }

}

export default Login
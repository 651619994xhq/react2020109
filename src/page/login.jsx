import React,{Component} from "react";
import {encodeQuery} from "@lib/utils";
import styles from './login.module.scss';
//目前react写css 大概3种方式
//1.css in js 这种更像js 写法
//2.css-module 侵入性更小一点
//3.模块命名法解决
//本人更偏向于css-module

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
        return (<div className={styles.abc} onClick={this.handleClick}>
                this is login page
            </div>
        )
    }

}

export default Login
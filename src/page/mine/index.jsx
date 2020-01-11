import React,{Component} from "react";
import styles from './index.module.scss';
import {CS} from '@/lib/helper';
let cs=new CS(styles);
class Mine extends Component{
    state={
        userInfo:{
            nickName:'xhq',
            code:10001001
        }
    }
    render() {
        return(
            <div className={cs.m('container')}>
                <div className={cs.m('mine-header row flex-item flex-justify-start')}>
                    <div className={cs.m('img-container')}>
                        <img src="//thirdqq.qlogo.cn/g?b=oidb&k=e1cU3DL4wVZmibNxkibwr9FQ&s=640&t=1555714129" alt=""/>
                    </div>
                    <div className={cs.m("text-container col flex-justify flex-item-start")}>
                        <p className={cs.m("title1")}>{this.state.userInfo.nickName}</p>
                        <p className={cs.m("title2")}>会员编号：{this.state.userInfo.code}</p>
                    </div>
                </div>
            </div>
        )
    }


}

export default Mine
import React, {Component} from "react";
import styles from './index.module.scss';
import {CS} from '@/lib/helper';
import Dialog from "../../components/dialog";

let cs = new CS(styles);

class Mine extends Component {
    state = {
        userInfo: {
            nickName: 'xhq',
            code: 10001001
        },
        isShowDialog:false,
        text:''
    }
    handleGoToPage=(path)=>{
       // this.props.history.push({
       //     pathname:path
       // })
        this.setState({isShowDialog: !this.state.isShowDialog,text:Math.random()});
    }
    handleCloseDialog=(value)=>{
        console.log(value);
        this.setState({isShowDialog: !this.state.isShowDialog});
    }

    render() {
        return (
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


                <div className={cs.m("mine-bottom-module col flex-item  flex-justify-start")} onClick={this.handleGoToPage.bind(this,'/login')}>
                    <div className={cs.m("item hairlines row flex-item flex-justify-between")}>
                        <div className={cs.m("left-item row flex-item flex-justify-start")}>
                            <div className={cs.m("item-icon")}>
                                <img src={require('@image/message@2x.png')} alt=""/>
                            </div>
                            <div className={cs.m("item-title")}>
                                个人信息
                            </div>
                        </div>
                        <div className={cs.m("right-item row flex-item flex-justify-between")}>
                            <div className={cs.m("item-title1")}>去完善</div>
                            <div className={cs.m("item-title2")}><img src={require("@image/icon_next_gary@2x.png")} alt=""/></div>
                        </div>
                    </div>
                    <div className={cs.m("item hairlines row flex-item flex-justify-between")} onClick={e=>this.handleGoToPage('login')}>
                        <div className={cs.m("left-item row flex-item flex-justify-start")}>
                            <div className={cs.m("item-icon")}>
                                <img src={require("@image/certificate@2x.png")} alt=""/>
                            </div>
                            <div className={cs.m("item-title")}>
                                我的收藏
                            </div>
                        </div>
                        <div className={cs.m("right-item row flex-item flex-justify-between")}>
                            <div className={cs.m("item-title2")}><img src={require("@image/icon_next_gary@2x.png")} alt=""/></div>
                        </div>
                    </div>
                    <div className={cs.m("item hairlines row flex-item flex-justify-between")}>
                        <div className={cs.m("left-item row flex-item flex-justify-start")}>
                            <div className={cs.m("item-icon")}>
                                <img src={require('@image/Service@2x.png')} alt=""/>
                            </div>
                            <div className={cs.m("item-title")}>
                                我的客服
                            </div>
                        </div>
                        <div className={cs.m("right-item row flex-item flex-justify-between")}>
                            <div className={cs.m("item-title2")}>
                                <img src={require('@image/icon_next_gary@2x.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>


                {this.state.isShowDialog&&
                (<Dialog text={this.state.text} handleCloseDialog={this.handleCloseDialog}>
                    我是children
                </Dialog>)
                }


            </div>
        )
    }


}

export default Mine
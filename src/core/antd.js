/**
 * @description 这是一个按需加载 ant-mobile ui 的一个类
 * @author xhq
 */
import React from "react";
import {Toast} from "antd-mobile";

//向组件上挂载全局组件 （据说官方不推荐这种，但是本人习惯，所以继续使用）
React.Component.prototype.$toast=Toast.info;
React.Component.prototype.$loading=function (content) {
    Toast.loading(content,0);
};
React.Component.prototype.$clear=function(){
    Toast.hide();
}
React.Component.prototype.$Toast=Toast;


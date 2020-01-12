import React,{Component} from "react";
import {Button} from 'antd-mobile';

let styles={
    container:{
        width:'60%',
        height:"300px",
        background:'pink',
        postion:'fixed',
        top:0,
        left:0,
        zIndex:1
    }


}

class Dialog extends Component{
      constructor(props){
          super(props)
      }

      render() {
          return (
            <div style={styles.container}>
                this is dialog{this.props.text||''}
                <Button type={'warning'} size={'small'} style={{width:'100px'}} onClick={this.props.handleCloseDialog.bind(this,'我是子组件')}>关闭弹窗</Button>
                {this.props.children}
            </div>

          )
      }



}

export default Dialog
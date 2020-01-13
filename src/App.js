import React,{Component}  from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import  {CSSTransition,TransitionGroup} from "react-transition-group";
import {   HashRouter,
    Route,
    Link,
    Switch,
    withRouter, } from 'react-router-dom'
import '@/App.scss';
import {login,exitLogin} from '@/redux/actions/userStatusAction'
import RouterConfig from "./router";
const DEFAULT_SCENE_CONFIG = {
    enter: 'from-right',
    exit: 'to-exit'
};
// const DEFAULT_SCENE_CONFIG = {
//     enter: '',
//     exit: '',
//     index:1
// };

const getSceneConfig = location => {
    const matchedRoute = RouterConfig.find(config => new RegExp(`^${config.path}$`).test(location.pathname));
    return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation=null; //老的路由信息
const Routes=withRouter(({location,history})=>{
    // 转场动画应该都是采用当前页面的sceneConfig，所以：
    // push操作时，用新location匹配的路由sceneConfig
    // pop操作时，用旧location匹配的路由sceneConfig
    let classNames = '';
    if(history.action === 'PUSH') {
        classNames = 'forward-' + getSceneConfig(location).enter;
    } else if(history.action === 'POP' && oldLocation) {
        classNames = 'back-' + getSceneConfig(oldLocation).exit;
    }
    oldLocation = location;

    return (
        <TransitionGroup
            className={'router-wrapper'}
            childFactory={child => React.cloneElement(
                child,
                {classNames: classNames}
            )}
        >
            <CSSTransition
                timeout={500}
                key={location.pathname}
            >
                <Switch location={location}>
                    {
                        RouterConfig.map((route,index) => {
                            return(
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}/>
                            )
                        })
                    }
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )

})

class App extends Component{
  constructor(props){
    super(props);
    this.state={test:'xhq'}
  }

  /**
   * dom渲染成功之后
   */
   async componentDidMount(){
    console.log(this.props)
    console.log('componentDidMount is run');
    // await this.props.actions.login();
    // console.log(this.props.actions.login() instanceof Promise)
    // console.log(123);
    // await this.props.actions.login();
    // console.log('xhq==>',this.props.state.user)

  }

  /**
   * dom 销毁之后
   */
  componentWillUnmount() {

  }
  render() {
      // console.log('props==>',this.props);
      return  (
              <HashRouter>
                  <Routes></Routes>
              </HashRouter>
      );

  }

}

const mapStateToProps=(state) => {
  return {
    state
  }
}

const mapDispatchToProps=(dispatch,ownProps) =>({
  actions: bindActionCreators({
    login,
    exitLogin
  }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
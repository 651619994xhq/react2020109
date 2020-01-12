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
import routers from "./router";

const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back',
    REPLACE:'forward'
}

//在这里可以直接引入store store.dispatch('event1')
const Routes=withRouter(({location,history})=>{
    console.log('history==>',history);
    let pathname=location.pathname
    let isNotAnimation=false;
    let timeout=500;
    if((pathname=='/detail/bus'||pathname=='/detail/car')&&history.action!='REPLACE'){
        isNotAnimation=true;
        timeout=0;
    }
    return (
        <TransitionGroup
            className={'router-wrapper'}
            childFactory={child => React.cloneElement(
                child,
                {classNames: isNotAnimation?'':ANIMATION_MAP[history.action]}
            )}
        >
            <CSSTransition
                timeout={timeout}
                key={location.pathname}
            >
                <Switch location={location}>
                    {
                        routers.map((route,index) => {
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
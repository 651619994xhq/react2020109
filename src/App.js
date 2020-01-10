import React,{Component}  from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {   HashRouter,
    Route,
    Link,
    Switch,
    withRouter, } from 'react-router-dom'
import '@/App.css';
import {login,exitLogin} from '@/redux/actions/userStatusAction'
import routers from "./router";

//在这里可以直接引入store store.dispatch('event1')
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
          <div className="App">

              <HashRouter>
                  <main>
                      <Switch>
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
                  </main>
              </HashRouter>
          </div>
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
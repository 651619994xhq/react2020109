import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    withRouter,
} from 'react-router-dom'
import '@/App.scss';
import { login, exitLogin } from '@/redux/actions/userStatusAction'
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

let oldLocation = null; //老的路由信息

const hasAnima = RouterConfig.filter(ele => ele.sceneConfig)
const noAnima = RouterConfig.filter(ele => !ele.sceneConfig)
const hasAnimaPath = new Set(hasAnima.map(ele => ele.path))

const Routes = withRouter(({ location, history }) => {

    // 转场动画应该都是采用当前页面的sceneConfig，所以：
    // push操作时，用新location匹配的路由sceneConfig
    // pop操作时，用旧location匹配的路由sceneConfig
    let classNames = '';
    if (history.action === 'PUSH') {
        classNames = 'forward-' + getSceneConfig(location).enter;
    } else if (history.action === 'POP' && oldLocation) {
        classNames = 'back-' + getSceneConfig(oldLocation).exit;
    }
    oldLocation = location;
    // REVIEW: 可以根据 count(动画的不同的状态) 结合 接下来的路由是否使用动画useAnima 去配合决定是否显示动画
    // 比如: 可以控制有动画的页面a跳转到没动画的页面b时 是直接显示b 还是在a的出场动画结束后再展示b
    // 比如: 可以控制没有动画的页面a跳转到有动画的b时 也可以控制何时去切换显示两个部分
    const [count, setCount] = useState('');
    const pathIsAnim = hasAnimaPath.has(location.pathname);
    // REVIEW:这里为了简单直接让useAnima 为pathIsAnim了 可以适当结合pathIsAnim与count得出useAnima
    const useAnima = pathIsAnim;

    const getRouter = (routerArr) => routerArr.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component} />
    ));
    return (
        <React.Fragment>
            <TransitionGroup
                style={{ visibility: useAnima ? 'unset' : 'hidden' }}
                className={'router-wrapper'}

                childFactory={child => React.cloneElement(
                    child,
                    { classNames: classNames }
                )}
            >
                <CSSTransition
                    timeout={500}
                    key={location.pathname}
                    onEnter={
                        () => setCount('enter')
                    }
                    onExited={
                        () => setCount('exited')
                    }
                >
                    <Switch location={location}>
                        {
                            getRouter(hasAnima)
                        }
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <div style={{ position: 'absolute', zIndex: '100000', visibility: !useAnima ? 'unset' : 'hidden' }}>
                {
                    getRouter(noAnima)
                }
            </div>
        </React.Fragment>
    )

})

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'xhq',
        }
    }

    /**
     * dom渲染成功之后
     */
    componentDidMount() {
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
        return (
            <HashRouter>
                <Routes></Routes>
            </HashRouter>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({
        login,
        exitLogin
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
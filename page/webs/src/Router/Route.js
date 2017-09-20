import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory,hashHistory} from 'react-router';
import login from '../Component/login'; //登录
import store from '../Redux/Store/index';

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
const page1 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/page1').default)
    },'page1')
}
const page2 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/page2').default)
    },'page2')
}
const history = hashHistory;
const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={login} />//登录  
            <Route path="page1" getComponent={page1} />//page1  
            <Route path="page2" getComponent={page2} />//page2  
        </Route>
    </Router>
);

export default RouteConfig;
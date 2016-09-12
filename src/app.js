import React,{Component} from "react";
import {render} from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Router,Route,Link,IndexRoute,hashHistory } from "react-router"
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import reducsers from './reducers';
import Home from "./routes/home";
import Header from "./components/header"
import Button from "./routes/button/index"

class App extends Component{
    render(){
        return (
           
            <div className="wrap">
                <Header />
                <ReactCSSTransitionGroup
                    component = "div"
                    transitionName = "page"
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {500}
                    style={{height:"100%"}}
                >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })} 
                </ReactCSSTransitionGroup>
            </div>
           
            
        )
    }
}
const store = createStore(
    combineReducers(Object.assign({}, reducsers, {routing: routerReducer})),
    applyMiddleware(thunk,routerMiddleware(hashHistory ))
);
store.subscribe(() =>
    console.log("状态改变", store.getState())
)
const histroy = syncHistoryWithStore(hashHistory ,store);
render((
    <Provider store={store}>
        <Router history={histroy} >
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="button" component={Button}/>
            </Route>
        </Router>
    </Provider>
    ),
    document.body
)
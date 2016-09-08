import React,{Component} from "react";
import {render} from "react-dom";

import {Router,Route,Link,IndexRoute,browserHistory} from "react-router"
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import reducsers from './reducers';
import Home from "./routes/home";
import Header from "./components/header"


class App extends Component{
    render(){
        return (
            <div className="wrap">
                <Header />
                {this.props.children}
            </div>
        )
    }
}
const store = createStore(
    combineReducers(Object.assign({}, reducsers, {routing: routerReducer})),
    applyMiddleware(thunk,routerMiddleware(browserHistory))
);
store.subscribe(() =>
    console.log("状态改变", store.getState())
)
const histroy = syncHistoryWithStore(browserHistory,store);
render((
    <Provider store={store}>
        <Router history={histroy} >
            <Route path="*" component={App}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>
    ),
    document.body
)
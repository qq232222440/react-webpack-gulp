import React,{Component} from "react";
import {render} from "react-dom";

import {Router,Route,Link,IndexRoute,browserHistory} from "react-router"

import About from "./routes/about";
import Home from "./routes/home";
import Repos from "./routes/repos";
// import Socket from "./routes/socket"

import RepoDetails from "./routes/repodetails"
import ServerError from "./routes/servererror"


class App extends Component{
    render(){
        return (
            <div className="wrap">
                <header>猎鹰导航</header>
                <menu>
                    <ul>
                        <li><Link to="/about">财经</Link></li>
                        <li><Link to="/repos">社会</Link></li>
                        <li><Link to="/socket">娱乐</Link></li>
                        <li><Link to="/socket">科技</Link></li>
                        <li><Link to="/socket">汽车</Link></li>
                        <li><Link to="/repos">视频</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        )
    }
}

render((
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} title="About us"/>
            <Route path="socket" title="socket connect"/>
            <Route path="repos" component={Repos}>
             <Route path="/repo/:repo_name" component={RepoDetails} />
            </Route>
<Route path="error" component={ServerError} />
        </Route>
    </Router>
    ),
    document.getElementById("app")
)
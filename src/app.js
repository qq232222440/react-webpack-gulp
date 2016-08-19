import React,{Component} from "react";
import {render} from "react-dom";

import {Router,Route,Link,IndexRoute,browserHistory} from "react-router"

import About from "./routes/about";
import Home from "./routes/home";
import Repos from "./routes/repos";
// import Socket from "./routes/socket"

import RepoDetails from "./routes/repodetails"
import ServerError from "./routes/servererror"


// import KankanBoard from './kankanBoard/index'
//import  ContactsApp from "./contactApp";
//
// let cardsList = [
//     {
//         id:1,
//         title:"abc1",
//         description:"123132131",
//         status:"in-progress",
//         tasks:[]
//     },
//     {
//         id:2,
//         title:"abc2",
//         description:"123132131",
//         status:"todo",
//         tasks:[
//             {
//                 id:1,aa
//                 name:"abc",
//                 done:true 
//             },
//             {
//                 id:2,
//                 name:"abc",
//                 done:true
//             },
//             {
//                 id:3,
//                 title:"abc",
//                 done:true
//             }
//         ] 
//     }
// ]
// render(<KankanBoard cards={cardsList} />,document.getElementById("app"))
// let contacts=[
//  { name: "Cassio Zen", email: "cassiozen@gmail.com" },
//  { name: "Dan Abramov", email: "gaearon@somewhere.com" },
//  { name: "Pete Hunt", email: "floydophone@somewhere.com" },
//  { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
//  { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
//  { name: "contactApp Markbage", email: "sebmarkbage@here.com" }
// ]
// render(<ContactsApp contacts={contacts} />,document.getElementById("app"))

class App extends Component{
    render(){
        return (
            <div>
                <header>猎鹰导航</header>
                <menu>
                    <ul>
                        <li><Link to="/about">财经</Link></li>
                        <li><Link to="/repos">社会</Link></li>
                        <li><Link to="/socket">娱乐</Link></li>
                        <li><Link to="/socket">科技</Link></li>
                        <li><Link to="/socket">汽车</Link></li>
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
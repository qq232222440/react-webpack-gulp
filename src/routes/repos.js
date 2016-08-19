import React,{Component} from "react"
import "whatwg-fetch"
import {Link,browserHistory } from "react-router"


class Repos extends Component{
    constructor(){
        super(...arguments);
        this.state={
            repositories:[]
        }
    }

    componentDidMount(){
       // fetch("https://api.github.com/users/pro-react/repos")
        fetch("https://api.github.com/users/pro-react/repos")
        .then((response)=>{
            if(response.ok){
                return response.json();
            }
            else
            { 
                throw new Error("Server response wasnt ok")
            } 
        })
        .then((responseData)=>{
            this.setState({repositories:responseData})
        })
        .catch((error)=>{
            console.log(this.context)
            this.context.router.push("/error");
        })
    }
    componentWillUnmount(){
        
    }
    render(){
        let repos = this.state.repositories.map((repo)=>(
            <li className="item" key={repo.id}>
            <Link to={"/repo/"+repo.name}>{repo.name}</Link>
            </li>
        ))
        console.log(this.state.repositories)
        let child = this.props.children&& React.cloneElement(this.props.children,{
            repositories:this.state.repositories
        })
        return (
            <div>
            <h1>Github repos</h1>
            <ul>
                {repos}
            </ul>
             {child}
            </div>
        )
    }
}
Repos.contextTypes={
    router: React.PropTypes.object.isRequired
}
export default Repos
import React,{PropTypes,Component} from "react";
import {Link} from 'react-router';
import {push} from "react-router-redux";
import {connect} from "react-redux";

class Header extends Component{
    render(){
        return (
            <div id="header">
                <div className="h-info"></div>  
                <ul>
                    <li onClick={()=>this.onMenuClick("")}>start11</li>
                    <li onClick={()=>this.onMenuClick("1")}>start</li> 
                    <li onClick={()=>this.onMenuClick("2")}>start</li>  
                    <li onClick={()=>this.onMenuClick("3")}>start</li>
                    <li onClick={()=>this.onMenuClick("4")}>start</li>
                    <li onClick={()=>this.onMenuClick("5")}>start</li>
                    <li onClick={()=>this.onMenuClick("6")}>start</li>
                    <li onClick={()=>this.onMenuClick("7")}>start</li>
                    <li onClick={()=>this.onMenuClick("8")}>start</li>
                    <li onClick={()=>this.onMenuClick("0")}>start</li>
                </ul>
            </div>
        )
    }
    onMenuClick(path){
        this.props.dispatch(push("/"+path))
    }
}

Header.propTypes = {
    onMenuClick:PropTypes.func.isRequired
}
let select = function(state,ownProps){
    return {}
}
export default connect(select)(Header);
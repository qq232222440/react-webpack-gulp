import React, { PropTypes, Component } from "react";
import { Link } from 'react-router';
import { push } from "react-router-redux";
import { connect } from "react-redux";
import Alert from "./alert/Alert"
import Toast from "./toast/Toast"

class Header extends Component {
    constructor(props) {
        super(props);
        let self = this;
        this.state = {
            show1: false,
            show2: false,

            timer2: null
        }

        this.hideLoading = null;
        this.hideLoadingBlock = null; 

        this.eventHandle = {
            onOk(number) {
                console.log("ok....", number)
            },
            onCancel(number) {
                let sets = {};
                sets["show" + number] = false;
                self.setState(sets);
            }
        }
    }
    componentWillUnmount() {
        this.state.timer2 && clearTimeout(this.state.timer2)
    }
    toastClickHandle(number){
        let states = this.state;
        let sets = {};
        sets["show" + number] = !states["show" + number];
        this.setState(sets);
        states["timer"+number] = setTimeout(()=>{
            sets["show"+number] = false;
            this.setState(sets)
        },2000)
    }

    alertClickHandler(number) {
        let states = this.state;
        let sets = {};
        sets["show" + number] = !states["show" + number];
        this.setState(sets);
    }
    render() {
        const { show1,show2} = this.state;

        return (
            <div id="header">
                <div className="h-info"></div>    
                <ul>
                    <li onClick={()=>this.alertClickHandler(1)}>start11</li>
                    <li onClick={()=>this.toastClickHandle(2)}>toast</li>  
                    <li onClick={()=>this.onMenuClick("2")}>start</li>  
                    <li onClick={()=>this.onMenuClick("3")}>start</li>
                    <li onClick={()=>this.onMenuClick("4")}>start</li> 
                    <li onClick={()=>this.onMenuClick("5")}>start</li>
                    <li onClick={()=>this.onMenuClick("6")}>start</li>
                    <li onClick={()=>this.onMenuClick("7")}>start</li>
                    <li onClick={()=>this.onMenuClick("8")}>start</li>
                    <li onClick={()=>this.onMenuClick("0")}>start</li>
                </ul>  
                <Alert show={show1} title="tips" onOk={()=>this.eventHandle.onCancel(1)}>确认要提交吗</Alert>
                <Toast show = {show2} type="bottom"  iconColor="#04be02">12312</Toast>
            </div>
        )
    }
    onMenuClick(path) {
        this.props.dispatch(push("/" + path))
    }
}

Header.propTypes = {
    onMenuClick: PropTypes.func.isRequired,
    alertClickHandler: PropTypes.func.isRequired,
    toastClickHandle:PropTypes.func.isRequired
}
let select = function(state, ownProps) {
    return {}
}
export default connect(select)(Header);
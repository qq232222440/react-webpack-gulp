import React,{Component} from "react";
import {getInitInfo} from "../actions"
import {connect} from 'react-redux';
import ListItem from "./listitem"
import {merge} from "lodash"
require("../../scss/index")
class Home extends Component{

    componentDidMount(){
     //    window.addEventListener('scroll', this.handleScroll);
        let {dispatch} = this.props
        let {isFetching,page,dt} = this.props.listInfo
        const urls = window.location.l
        if (isFetching === false && dt.length === 0) {
            dispatch(getInitInfo(this.props.title, page,"http://localhost:8080/1.json"));
        }
    }
    componentWillMount(){
        console.log("componentWillMount")
      //  this.setState({arr:[1,2,3,4,5,6,7,8,9,0,1]})
      //  window.removeEventListener('scroll', this.handleScroll);
    }
    render(){
        let self = this
        return (
            <div className="content" onScroll={(e)=>self.onScroll(e)}>
                    <ListItem data = {this.props.listInfo.dt} />
            </div>
        )
    }

    onScroll(e){
        let target = e.target;
        let i = 0;
    console.log(i)
        if(target.scrollTop+target.clientHeight>target.scrollHeight-44)
        {
            i++;

        }
    }
}
let select = function(state,ownProps)
{
    // let title = state.routing.locationBeforeTransitions.pathname.substr(1);
    let title = "all";
    let listInfo = merge({},state.getInfoList[title])
    let r = {
        listInfo:listInfo,
        title:title
    }
    //console.log("r",r)
    return r;
}
export default connect(select)(Home);

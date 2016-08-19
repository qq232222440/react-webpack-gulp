import React,{Component} from "react";
import io from "socket.io-client"
//var io = require("../../lib/socket.io-1.4.0")
var socket = io("http://localhost:3000");

class Socket extends Component {

    constructor(props){
        super(props)
        this.state = {text:""}
    }
   
   componentDidMount(){
    let me = this;
    socket.on('connect', function () {
    socket.send('hi'); 

    socket.on('message', function (msg) {
      // my msg
    });
  });
    socket.on('chat message', function(msg){
            me.setState({text:msg})
    });
   
   }
    handleChnage(e){
        socket.emit("chat message",e.target.value)
    }

    render(){
        return(
        <div>
            <ul id="messages">{this.state.text}</ul>
            <form>
            <input id="m" onChange={this.handleChnage} value={this.state.text}/><button>Send</button>
            </form>
        </div>
        )
    }
} 
Socket.propTypes={
    text:React.PropTypes.string.isRequired
} 
Socket.defaultProps={
    text:""
}
export default Socket
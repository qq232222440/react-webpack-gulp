import React,{Component,PropTypes} from 'react';

class SocketProvider extends Component{
    static propTypes = {
        socket:PropTypes.oneOfType({
            PropTypes.bool,PropTypes.object
        })
    }
    static defaultProps = {
        socket:false
    }
    static childContextTypes = {
        socket:PropTypes.oneOfType([
            PropTypes.bool,PropTypes.object
        ])
    }
    getChildContext(){
        return {
            socket:this.props.socket
        }
    }
    render(){
        return this.props.children;
    }
}

export default SocketProvider
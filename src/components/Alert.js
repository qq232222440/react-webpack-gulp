import React,{Component} from "react";
import classNames from 'classNames';
import Mask from "./mask/mask"

export default class Alert extends Component{
   
    static propTypes  = {
        show:React.PropTypes.bool,
        title:React.PropTypes.string,
        onOk:React.PropTypes.func,
        footer:React.PropTypes.array
    };
    
    static defaultProps = {
        show:false,
        title:"",
        footer:[{text:"完成"}],
        onOk:function(){}
    } 
   
    _renderButton(){
        
        const {footer,onOk} = this.props;
        
        if(footer.length==1)
        {
            let {text,color,onClick:onOk2} = footer[0];
            if(!onOk2)
            {
                onOk2 = onOk;
            }
            return <a 
                    key={1} 
                    href="javascript:;"
                    onClick = {onOk2} 
                    className="f-alert-btn" 
                    style={color?{color:color}:{}}
                    >{text}</a>
        }
         
        return footer.map((action,i) => {

            const {onClick,color,text} = action;
            return ( 
                <a 
                key={i} 
                href="javascript:;" 
                onClick={onClick} 
                className="f-alert-btn" 
                style={ color ? {color:color} : {}}
                >{text}</a>
            )
        })
    }
    render(){

        const {show,title,children,className,...others} = this.props;
        const cls = classNames({
            "f-alert":true,
            [className]:className
        })
        return (
            <div style={{display:show?'block':'none'}}>
                <Mask show={true}></Mask>
                <div className={cls}>
                <div className="f-alert-hd">
                    <strong className="f-alert-title">{title}</strong>
                </div>
                <div className="f-alert-hd">
                    {children}
                </div>
                <div className="f-alert-ft">
                    {this._renderButton()}
                </div>
                </div>
            </div>
        )
    }
}
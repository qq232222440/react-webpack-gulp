import React,{Component} from "react"

export default class extends Component{
    render(){
        const {title,subTitle,spacing,className,children} = this.props;

        return (
            <section>
                <div className={`page ${className}`}>
                    <div className = "hd">
                        <a href="#"><h1 className="title">{title}</h1></a>
                        <p className="sub_title">{subTitle}</p>
                    </div>
                    <div className={`bd ${spacing?'spacing':''}`}>
                        {children}
                    </div>
                </div>
            </section>
        )
    }
} 
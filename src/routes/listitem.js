import React,{Component} from "react"
import Count from "../components/count"
import NumberInput from "../components/button/NumberInput"

export default class ListItem extends Component{

    render(){
        let arrs = this.props.data;
        console.log(arrs)
        let arr =  arrs.map((dd)=>{ 
            return (<section key={dd} className="video-item">
         
                    <div className="v-pic">
                         <div className="item-img">
                            <img src="" alt="11"/>
                         </div>
                         <div className="item-info">
                            <p className="title">1231312</p>
                            <p className="desc">aaaaaa</p>
                         </div>
                         <div className="upgrade">
                            <span className="">增加</span>
                            <span className="">减少</span>
                         </div>
                         
                    </div>
                    <div className="v-mask">
                        {dd}
                    </div>
            
            </section>)
        })
        return (<div  className="video-content">{arr}</div>);
    }
}
// <NumberInput min={1} max={99} value={1}/> 

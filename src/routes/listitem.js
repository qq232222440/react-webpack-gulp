import React,{Component} from "react"
import Count from "../components/count"

class ListItem extends Component{

    render(){
        let arrs = this.props.data;
        console.log(arrs)
        let arr =  arrs.map((dd)=>{ 
            return (<section key={dd} className="video-item">
                <a href='#button'>
                    <div className="v-pic">
                         <div className="item-img">
                            <img src="" alt="11"/>
                         </div>
                         <div className="item-info">
                            <p className="title">1231312</p>
                            <p className="desc">aaaaaa</p>
                         </div>
                         <div className="">
                            <span className="dec">-</span>
                            <span className="count">0</span>
                            <span className="add">+</span>
                         </div>
                    </div>
                    <div className="v-mask">
                        {dd}
                    </div>
                </a>
            </section>)
        })
        return (<div  className="video-content">{arr}</div>);
    }
}

export default ListItem
import React,{Component} from "react";
import {render} from 'react-dom';
import {Button} from "../../components";
import Page from "../../routes/page"; 
import Silder from "../../components/rangeslider"
export default class ButtonDemo extends Component{
    constructor (props, context) {
        super(props, context)
        this.state = {
            value: 10
        }
    }

    handleChange = (value) => {
        this.setState({
        value: value
        })
    }

    render(){
        const { value } = this.state
        return (
            <Page className="button-layout" title="Slider" spacing > 
                <Silder 
                    min={0}
                    max={100}
                    value={value}
                    onChange={this.handleChange}
                />
                <div className='value'>Value: {value}</div>
            </Page>
        )
    }
}
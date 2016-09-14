import React,{Component} from "react";
import {Button} from "../../components";
import Page from "../../routes/page"; 
export default class ButtonDemo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Page className="button-layout" title="Button" spacing>
            </Page>
        )
    }
}
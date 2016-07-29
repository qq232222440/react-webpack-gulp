import React,{Component} from "react";
import {render} from "react-dom";
import KankanBoard from './kankanBoard/index'
let cardsList = [
    {
        id:1,
        title:"abc1",
        description:"123132131",
        status:"in-progress",
        tasks:[]
    },
    {
        id:2,
        title:"abc2",
        description:"123132131",
        status:"todo",
        tasks:[
            {
                id:1,
                name:"abc",
                done:true
            },
            {
                id:2,
                name:"abc",
                done:true
            },
            {
                id:3,
                title:"abc",
                done:true
            }
        ] 
    }
]
render(<KankanBoard cards={cardsList} />,document.getElementById("app"))
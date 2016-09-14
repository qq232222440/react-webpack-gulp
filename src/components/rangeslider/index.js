
import classNames from 'classnames'
import React, { PropTypes, Component } from 'react'

export default class Slider extends Component{
    const constatns = {
        orientation:{
            horizontal:{
                dimension:"width",
                direction:"left",
                coordinate:"x"
            },
            vertical:{
                 dimension:"height",
                direction:"top",
                coordinate:"y"               
            }
        }
    }
    static propTypes = {
        min:PropTypes.number,
        max:PropTypes.number,
        step:PropTypes.number,
        value:PropTypes.number,
        orientation:PropTypes.string,
        onChange:PropTypes.func,
        className:PropTypes.string
    }
    static defaultProps = {
        min:0,
        max:100,
        step:1,
        value:0,
        orientation:"horizontal"
    }
    constructor (props, context) {
        super(props, context)
        this.state = {
            limit: 0,
            grab: 0
        }
    }

    handleStart(e){

    }
    handleEnd(e){

    }
    handleDrag(e){

    }
    handleUpdate(e){

    }
    
    render(){
        return (
            <div className="" 
                onMouseDown={this.handleStart}
                onTouchEnd = {this.handleEnd}
                onTouchMove = {this.handleDrag}
            >
                <div className=""></div>
                <div className=""></div>
            </div>
        )
    }
}
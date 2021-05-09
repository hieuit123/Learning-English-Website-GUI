import React, { Component } from 'react'
import ListWordBookInside from './List-Word-Book-Inside/index.js'
import ToolBar from './ToolBar'

export default class ListWordBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReload : false
        }
    }
    render() {
        const handleReloadListWordBook = ()=>{
            this.setState({isReload:true});
        }
        const handleBreakReloadListWordBook = ()=>{
            this.setState({isReload:false})
        }
        return (
            <div>
                <ToolBar reload = {()=>handleReloadListWordBook()}/>
                <hr className="line-full"></hr>
                <div className="container-right-panel">
                <ListWordBookInside isReload={this.state.isReload} breakReload = {()=>handleBreakReloadListWordBook()}/>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import ToolBar from './ToolBar'


export default class WordBookDetail extends Component {
    render() {
        
        return (
            <div>
                <ToolBar/>
                <hr className="line-full"></hr>
                <div className="container-wb-detail">
                <LeftPanel />
                <RightPanel id={this.props.id}/>
                <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import ToolBar from './ToolBar'
export default class WordBookDetail extends Component {
    render() {
        return (
            <div>
                <ToolBar/>
                <hr></hr>
                <LeftPanel />
                <RightPanel />
            </div>
        )
    }
}

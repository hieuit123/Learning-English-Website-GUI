import React, { Component } from 'react'
import ListWordBookInside from './List-Word-Book-Inside/index.js'
import ToolBar from './ToolBar'

export default class ListWordBook extends Component {
    render() {
        return (
            <div>
                <ToolBar/>
                <hr className="line-full"></hr>
                <div className="container-right-panel">
                <ListWordBookInside/>
                </div>
            </div>
        )
    }
}

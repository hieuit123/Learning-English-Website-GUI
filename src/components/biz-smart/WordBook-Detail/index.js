import React, { Component } from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
export default class WordBookDetail extends Component {
    render() {
        return (
            <div>
                <LeftPanel />
                <RightPanel />
            </div>
        )
    }
}

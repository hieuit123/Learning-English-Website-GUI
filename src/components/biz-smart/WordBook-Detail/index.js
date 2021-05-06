import React, { Component } from 'react'
import { connect } from 'react-redux'

import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import ToolBar from './ToolBar'
import * as actions from './../../../actions'

class WordBookDetail extends Component {
    componentWillUnmount(){
        this.props.callWordsMange(actions.initWordsDataAction(null))
    }
    render() {
        
        return (
            <div>
                <ToolBar id={this.props.id}/>
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

const mapDispatchToProps = (dispatch) =>{
    return {
        callWordsMange: (action)=>{
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchToProps)(WordBookDetail)
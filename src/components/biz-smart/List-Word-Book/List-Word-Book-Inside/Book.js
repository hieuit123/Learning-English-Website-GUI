import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../../../actions'
import * as types from './../../../../constant/ACTION_TYPE'


class Book extends Component {
    render() {

        var tempData = [...this.props.wordbook]
        tempData.shift()
        var title = this.props.wordbook[0]
        var wordbookPreview = tempData.map((value) => value + ", ")
        const handleClickItem = () => {
            this.props.onOpenBookDetail(actions.openComponentDetailAction(types.SHOW_WB_DETAIL, this.props.id))
        }
        return (
            <div className={this.props.color} onClick={handleClickItem} >
                <label>{title}</label>
                <hr></hr>
                <p>{wordbookPreview}</p>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenBookDetail: (action) => {
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(Book)

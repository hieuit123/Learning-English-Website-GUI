import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../../../actions'
import * as types from './../../../../constant/ACTION_TYPE'
import axios from 'axios'
class Book extends Component {
    render() {

        // var tempData = [...this.props.wordbook]
        // tempData.shift()
        // var wordbookPreview = tempData.map((value) => value + ", ")
        console.log(this.props.wordbook);
        const handleClickItem = async () => {
            console.log("start");
            this.props.onOpenBookDetail(actions.openComponentDetailAction(types.SHOW_WB_DETAIL, this.props.wordbook.WB_Id))
            
            let result = await axios.get("/word/getallbyidwordbook/" + this.props.wordbook.WB_Id)
            let finalResult = result.data
            if (finalResult.status) this.props.onOpenBookDetail(actions.initWordsDataAction(finalResult.data))


        }
        return (
            <div className={this.props.color} onClick={handleClickItem} >
                <label>{this.props.wordbook.WB_Name}</label>
                <hr></hr>
                <p>this is my example </p>
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

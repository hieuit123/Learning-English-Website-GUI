import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../../../actions'
import * as types from './../../../../constant/ACTION_TYPE'
import axios from 'axios'
class Book extends Component {
    render() {
        let isClickButton = false
        // var tempData = [...this.props.wordbook]
        // tempData.shift()
        // var wordbookPreview = tempData.map((value) => value + ", ")
        const handleClickItem = async () => {

            if (!isClickButton) {
                this.props.onOpenBookDetail(actions.openComponentDetailAction(types.SHOW_WB_DETAIL, this.props.wordbook.WB_Id))

                let result = await axios.get("/word/getallbyidwordbook/" + this.props.wordbook.WB_Id)
                let finalResult = result.data
                let resultStateData = await axios.get("/word/statisticsByIdWordBook/" + this.props.wordbook.WB_Id)
                let finalResultStateData = resultStateData.data
                console.log(finalResultStateData);
                if (finalResult.status && finalResultStateData.status) {
                    console.log(finalResultStateData);
                    this.props.onOpenBookDetail(actions.initWordsDataAction(finalResult.data, finalResultStateData, this.props.wordbook.WB_Name))
                }
                else {
                    this.props.onOpenBookDetail(actions.initWordsDataAction(null, null, this.props.wordbook.WB_Name))
                }
            }
            isClickButton = false

        }

        const handleRemove = async () => {
            //remove wordbook
            isClickButton = true
            let confirmRemove = window.confirm("Bạn chắc chắn muốn xóa sổ từ này?")
            if (confirmRemove) {
                let result = await axios.get("/wordbook/updateWordBookState/" + this.props.wordbook.WB_Id)
                if (result.data.status) {
                    alert("Đã xóa")
                    let result = await axios.get("/wordbook/getallbyidaccount/" + this.props.wordbook.WB_idAccount)
                    let finalResult = result.data
                    if (finalResult.status) this.props.onOpenBookDetail(actions.initWordbookDataAction(finalResult.data))
                }
            }

        }
        return (
            <div className={this.props.color} onClick={handleClickItem} >
                <label>{this.props.wordbook.WB_Name}</label>
                <button onClick={handleRemove}><i className="far fa-trash-alt"></i></button>
                <hr></hr>
                <p>this is my example </p>

                <div className="clearfix"></div>
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

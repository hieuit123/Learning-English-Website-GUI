import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";
import { connect } from 'react-redux'
import axios from 'axios'

import * as actions from './../../../../actions'
import * as configUrl from './../../../../assets/config/config-url'
import convertPostData from './../../../../utils/convertPostData'

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.setState({
            searchValue: null
        });
    }
    render() {
        async function sendWordBook(wordBook) {
            let formBody = convertPostData(wordBook)
            let response = await fetch(`${configUrl.NODE_SERVER_URL}/wordbook/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
            }).then(data => data.json())
            if (response.status === true) {
                return true
            }
            return false
        }
        var handleSearchClick = () => {
            alert("Clicked")
        }
        const saveWordBook = async () => {
            let accountId = localStorage.getItem("accountIDlve")
            let nameWordBook = document.getElementById("addWordBookInput").value
            let newWordBookData = {
                WB_Name: nameWordBook,
                WB_idAccount: accountId
            }
            let addWordStatus = await sendWordBook(newWordBookData)
            if (addWordStatus) {
                let accountID = localStorage.getItem("accountIDlve")
                let result = await axios.get("/wordbook/getallbyidaccount/" + accountID)
                let finalResult = result.data
                if (finalResult.status) this.props.callInitDispatch(actions.initWordbookDataAction(finalResult.data))
            }

        }
        return (
            <div className="right-word-book">
                <div className="t-right-panel">SỔ TỪ VỰNG</div>
                <button className="add-button" data-toggle="modal" data-target="#addWordBookModal" data-tip="Tạo sổ từ mới" data-for="addButtonTip" >
                    <i className="fas fa-plus-circle"></i>
                </button>
                <div className="modal fade" id="addWordBookModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thêm Sổ Từ</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input id="addWordBookInput" placeholder="Tên sổ từ" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                                <button onClick={() => saveWordBook()} type="button" data-dismiss="modal" className="btn btn-primary">Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactTooltip className="tooltipButton" id="addButtonTip" place="bottom" effect="solid" />
{/* 
                <div className="btn-filter" onClick={handleSearchClick}> <i className="fas fa-filter fa-xs"></i> </div>

                <div className="btn-search" onClick={handleSearchClick}><i className="fas fa-search fa-xs"></i></div>

                <div className="search-box">
                    <form onSubmit={handleSearchClick}>
                        <input type="text" id="inputSearch" className="form-control-search" placeholder="Tìm kiếm ...." onChange={e => this.setState({ searchValue: e.target.value })} />
                    </form>
                </div> */}

                <div className="clearfix"></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        callInitDispatch:(action)=>{
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(ToolBar)

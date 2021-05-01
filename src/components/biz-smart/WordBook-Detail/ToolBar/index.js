import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import * as types from './../../../../constant/ACTION_TYPE'
import { closeComponentDetailAction } from './../../../../actions/index'
import * as actions from './../../../../actions'
class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: null,
        }
    }

    render() {
        const handleBackClick = () => {
            this.props.callDispatch(closeComponentDetailAction(types.SHOW_WB_DETAIL))

        }
        const handleSearchClick = e => {
            e.preventDefault();
        }
        const changeOption = async (e) => {
            console.log(e.target.value);
           // await searchWord("",e.target.value)
        }
        const searchWord = async (inputSearch, option) => {
            let result = await axios.get(`/word/search/${inputSearch}/${option}`)
            let finalResult = result.data
            if (finalResult.status) this.props.callDispatch(actions.initWordsDataAction(finalResult.data))
            console.log(finalResult.status);
        }
        const updateSearchResult = async (e) => {
            let myRegex = /\w+$/;
            let validate = myRegex.exec(e.target.value)
            if (validate) {
                let option = document.getElementById("filterOption").value
                await searchWord(e.target.value, option);
            }
        }
        return (
            <div className="toolbar-wb-detail">
                <Link to="/manage">
                    <div className="btn-back" onClick={handleBackClick}>
                        <i className="fas fa-chevron-circle-left fa-lg"></i>
                    </div>
                </Link>
                <div className="t-wb-detail">Công nghệ thông tin <br></br> <div className="sotu">Số từ: 3</div></div>

                <select onClick={e => changeOption(e)} id="filterOption" className="form-select" aria-label="Default select example">
                    <option value={0}>Sắp xếp theo</option>
                    <option value={3}>Từ ưu tiên</option>
                    <option value={1}>Từ A-Z</option>
                    <option value={2}>Từ Z-A</option>
                </select>

                <div className="search-box">
                    <form onSubmit={handleSearchClick}>
                        <input type="text" id="inputSearch" className="form-control-search" placeholder="Tìm kiếm ...." onChange={e => updateSearchResult(e)} />
                    </form>
                </div>

                <div className="clearfix"></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callDispatch: (action) => {
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(ToolBar)
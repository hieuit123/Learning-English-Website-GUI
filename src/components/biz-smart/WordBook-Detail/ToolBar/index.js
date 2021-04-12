import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as types from './../../../../constant/ACTION_TYPE'
import {closeComponentDetailAction} from './../../../../actions/index'

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue:null,
        }
    }
    
    render() {
        const handleBackClick = ()=>{
            this.props.onCloseBookDetail(closeComponentDetailAction(types.SHOW_WB_DETAIL))

        }
        const handleSearchClick = e =>{
            e.preventDefault();
        }
        return (
            <div className="toolbar-wb-detail">
                <Link to="/manage">
                <div className="btn-back" onClick={handleBackClick}>
                    <i className="fas fa-chevron-circle-left fa-lg"></i>
                </div>
                </Link>
                <div className="t-wb-detail">Công nghệ thông tin <br></br> <div className="sotu">Số từ: 3</div></div>

                <select className="form-select" aria-label="Default select example">
                    <option defaultValue="">Sắp xếp theo</option>
                    <option value={1}>Từ ưu tiên</option>
                    <option value={2}>Từ A-Z</option>
                    <option value={3}>Từ Z-A</option>
                </select>

                <div className="search-box">
                    <form onSubmit={handleSearchClick}>
                        <input type="text" id="inputSearch" className="form-control-search" placeholder="Tìm kiếm ...." onChange={e => this.setState({ searchValue: e.target.value })} />
                    </form>
                </div>

                <div className="clearfix"></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCloseBookDetail: (action) => {
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(ToolBar)
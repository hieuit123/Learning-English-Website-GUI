import React, { Component } from 'react'

export default class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.setState({
            searchValue: null
        });
    }

    render() {

        var handleSearchClick = () => {
            alert("Clicked")
        }
        return (
            <div className="right-word-book">
                <div className="t-right-panel">SỔ TỪ VỰNG</div>
                <div className="add-button"><i className="fas fa-plus-circle"></i></div>

                <div className="btn-filter" onClick={handleSearchClick}> <i className="fas fa-filter fa-xs"></i> </div>

                <div className="btn-search" onClick={handleSearchClick}><i className="fas fa-search fa-xs"></i></div>

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

import React, { Component } from 'react'

export default class ToolBar extends Component {
    render() {
        return (
            <div className="toolbar-wb-detail">
                <div className="btn-back">
                    <i className="fas fa-caret-square-left fa-lg"></i>
                </div>

                <div className="t-wb-detail">Công nghệ thông tin</div>

                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>

                <div className="clearfix"></div>
            </div>
        )
    }
}
